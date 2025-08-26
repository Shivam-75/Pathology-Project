import express from "express";
import { adminBilling, adminDataDate, details, Doctorset, getAdmin } from "./adminBilling.controller.js";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddlware } from "../middlewares/admin.middleware.js";
import { validatorChecker } from "../middlewares/auth-validator.middleware.js";
import { billingSchema } from "../validator/validator.js";

export const adminroute = express.Router();

adminroute.post("/billinform", validatorChecker(billingSchema),AuthMiddleware,adminMiddlware,adminBilling)
adminroute.get("/adminbillingdata", AuthMiddleware,adminMiddlware,adminDataDate)
adminroute.get("/admin", AuthMiddleware, adminMiddlware, getAdmin)
adminroute.get("/admin/doctordata",Doctorset)
adminroute.get("/admin/doctordata/dts/:userId", AuthMiddleware, adminMiddlware, details)