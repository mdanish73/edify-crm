import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: [true, "Username is required..."],
        unique: [true, "User already exists..."]
    },
    designation: {
        type: String,
        required: true
    }, 
    email: {
        value: {
            type: String,
            unique: [true, "Email is already registered..."],
            required: [true, "Please enter an email..."]
        }
    },
    password: {
        type: String,
        required: "Please enter a password..."
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: [true, "isAdmin field is required..."] 
    }, 
    rights: [
        {
            resources: {
                type: String,
                trim: true,
            }, 
            accessType: {
                type: String,
                enum: ["readOnly", "readAndUpdate", "full"]
            }
        }
    ],
    photo: {
        type: String,
        required: false
    },
    otp: {
        type: Number,
        expirationTime : Number
    },
    isApproved: {
        type: Boolean,
        default: false,
        required: false
    }
}) 

export default mongoose.models?.users || mongoose.model('users', userSchema);