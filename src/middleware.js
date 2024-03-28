import { NextResponse } from "next/server";
import { JWTVerify } from "@/helpers/jwt";
import { publicRoutes } from "../data";

export async function middleware (req, res) {
    var pathName = req.nextUrl.pathname;
    var token = req.cookies.get("AccessToken")?.value;
    var userID = token && await JWTVerify(token);

    if (!userID && (!publicRoutes.includes(pathName))) {
        return NextResponse.redirect(new URL("/login", req.nextUrl))
    }
    
    if (userID && (publicRoutes.includes(pathName))) {
        return NextResponse.redirect(new URL("/dashboard/", req.nextUrl))
    }

    var user = await fetch(`http://localhost:3000/api/auth/profile/${userID}`);
    user = await user.json();
    user = user.message;

    if (user) {
        if (user.isAdmin) {
            var isUserAccessible = user.rights?.find(v => v.resource == 'users');
            
            if (pathName.startsWith('/dashboard/users') && !isUserAccessible) {
                return NextResponse.redirect(new URL('/dashboard/', req.nextUrl));
            }
        }
    }
}

export const config = {
    matcher: [
      "/login",
      "/dashboard/",
      "/dashboard/users",
      "/dashboard/users/:path*",
      "/dashboard/profile",
    ]
};