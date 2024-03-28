import mongoose from "mongoose";

const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("Database connection established...");
    } else {
        try {
            mongoose.connect(process.env.DB_URL);
            console.log("Database connection established...");
        } catch (error) {
            console.log(error.message);
        }
    }
}

export default dbConnect;