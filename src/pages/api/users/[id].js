import dbConnect from "@/config/dbConnect";
import users from "@/models/users";
import { errors } from "jose";

export default async function handler (req, res) {
    dbConnect();

    var foundUser;

    try {
        foundUser = await users.findById(req.query.id);
        
        if (!foundUser) {
            res.status(404).json({
                success: false,
                message: "User Not Found...",
            });
            
            return;
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid ID Sent..."
        });

        return;
    }

    try {
        switch (req.method) {
            case "GET":
                res.status(200).json({
                    success: true,
                    message: foundUser
                });

                break;
            
            case "PUT":
                await users.findByIdAndUpdate(req.query.id, { $set: req.body }, { new: true });
                res.status(201).json({
                    success: true,
                    message: foundUser
                });

                break;

            case "DELETE":
                await users.findByIdAndDelete(req.query.id);
                res.status(201).json({
                    success: true,
                    message: "User Deleted Successfully..."
                });

                break;

            default:
                res.status(500).json({
                    success: false,
                    message: "Bad Request. Method Not Allowed...",
                });
        }
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: `${Object.keys(error.keyPattern)[0]} is already in use...`
            });
        }

        var requiredFieldName = Object.keys(error.errors)[0];

        if (requiredFieldName) {
            return res.status(400).json({
                success: false,
                message: `${requiredFieldName} is required...`
            });
        }

        res.status(500).json({
            success: false,
            message: "Interval Server Error...",
        });
    }
}