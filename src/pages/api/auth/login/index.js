import users from "@/models/users";
import dbConnect from "@/config/dbConnect";
import bcrypt from "bcrypt";
import { serialize } from "cookie";
import { genAccessToken } from '@/helpers/jwt';

export default async function handler (req, res) {
    dbConnect();

    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            res.status(404).json({
                success: false,
                message: "Username or password can not be empty..."
            });
            
            return;
        }

        const foundUser = await users.findOne({ username });

        if (!foundUser) {
            res.status(400).json({
                success: false,
                message: "User not found..."
            });

            return;
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, foundUser.password);

        if (!isPasswordValid) {
            res.status(401).json({
                success: false,
                message: "Invalid Credentials...",
            });

            return;
        }

        const accessToken = await genAccessToken({
            id: foundUser._id
        });

        res.setHeader(
            "Set-Cookie",
            serialize("accessToken", accessToken, {
                path: '/',
                httpOnly: true,
                secure: true
            })
        );

        var user = {
            id: foundUser._id
        };

        res.status(200).json({
            success: true,
            message: 'User Logged In Successfully...'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error...",
            error: error.message
        });
    }
}