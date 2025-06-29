import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js"
export const AuthMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({
            message: " Access denied ",
            success: false
        })
    }
    const jwtToken = token.replace("Bearer", "").trim();

    try {

        const tokenVerify = jwt.verify(jwtToken, process.env.SECRET_KEY)

        const tokenVerifyUser = await User.findOne({ email: tokenVerify.email }).select({ password: 0 });
        if (!tokenVerifyUser) {
            return res.status(401).json({
                message: "Invalid User Access Denied",
                success: false
            })
        }

        req.user = tokenVerifyUser;
        req.token = jwtToken;
        req.userId = tokenVerifyUser._id;

        next();

    } catch (err) {
        return res.status(401).json({
            message: err
        })
    }
}