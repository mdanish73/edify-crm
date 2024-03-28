import { jwtVerify, SignJWT } from "jose";

async function genAccessToken (data) {
    const token = await new SignJWT(data).setProtectedHeader({ alg: "HS256" }).setExpirationTime("1d").setIssuedAt().sign(new TextEncoder().encode(process.env.JWT_SECRET));
    return token;
}

async function JWTVerify (token) {
    try {
        var { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
        return payload.id;
    } catch (error) {
        console.log(error.message);
    }
}

export { JWTVerify, genAccessToken };