import express from "express";
import { login, register } from "../controllers/user.controller.js";
import { validatorChecker } from "../middlewares/auth-validator.middleware.js";
import { loginSchema, registerSchema } from "../validator/validator.js";

export const userRoute = express.Router();

userRoute.post("/register",validatorChecker(registerSchema),register)
userRoute.post("/login", validatorChecker(loginSchema) ,login)