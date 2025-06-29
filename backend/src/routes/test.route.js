import express from "express";
import { Test1, Test2 } from "../controllers/test.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddlware } from "../middlewares/admin.middleware.js";

export const normalTest = express.Router();

normalTest.get("/normaltest",Test1)
normalTest.get("/advanced",Test2)