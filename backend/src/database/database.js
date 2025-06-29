import mongoose from "mongoose"

export const db = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log("database Connected Successfully");
    }
    catch (err) {
        console.log("database connection error", err);
    }
}