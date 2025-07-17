import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {

        if (!name || !email || !password) {
            return res.status(401).json({
                message: "Fill All colum Properly",
                success: false
            })
        }
        const userData = await User.findOne({ email });
        if (userData) {
            return res.status(401).json({
                message: "Try another Email and password ..",
                success: false,
            })
        }

        // //? password hasing---
        const isPassword = await bcrypt.hash(password, 10);
        const userRegister = await User.create({
            name,
            password: isPassword,
            email
        })

        return res.status(201).json({
            message: "User Register Successfully",
            success: true,
        })
    } catch (err) {
        return res.json({
            message: "Server Error Data Not Fatch ",
            success: false
        })
    }
}

//? login api--

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(401).json({
                message: "Credentail Error Try Anoter Email Password",
                success: false
            })
        }
        const pswCheck = await bcrypt.compare(password, userExist.password);
        if (!pswCheck) {
            return res.status(401).json({
                message: "Invalid login Try another Email password",
                success: true
            })
        }
        const Token =  await jwt.sign({
            isAdmin:userExist.isAdmin
        },
            process.env.SECRET_KEY,{expiresIn:"1d"}
        )


        return res.status(201).json({
            message: "User Register SuccessFully",
            success: true,
            Token: Token
        })
    }
    catch (err) {
        console.log(err);
        return res.json({
            message: "Server Error Data Not Fatch ",
            success: false
        })
    }
}

