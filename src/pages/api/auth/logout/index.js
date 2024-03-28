import { serialize } from "cookie";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export default async function (req, res) {
    try {
        res.setHeader(
            "Set-Cookie",
            serialize("accessToken", "", {
                path: '/',
                httpOnly: true,
                secure: true
            })
        );

        res.status(200).json({
            success: true,
            message: "User was Logged Out Successfully..."
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal Server Error..."
        });
    }
}