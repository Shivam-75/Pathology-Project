import express from "express";
import { config } from "dotenv";
import { userRoute } from "./src/routes/user.route.js";
import { db } from "./src/database/database.js";
import { normalTest } from "./src/routes/test.route.js";
import cors from "cors";
import { adminroute } from "./src/admin/adminbillin.route.js";
import cookieParser from "cookie-parser";
config({
    path:"./.env"
})


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173/",
    methods: "GET, POST ,PUT ",
    credentials:true
}))
app.get("/", (req, res) => {
    res.send("welcome");
})
app.use("/api/user", userRoute);
app.use("/api/user", normalTest);
app.use("/api/admin", adminroute);




const port = process.env.PORT;
db().then(() => {
    app.listen(port, () => {
        console.log(`Server is runnin on http://localhost:${port}`);
    })
}).catch((err) => {
    console.log("database not coonected", err);
})
