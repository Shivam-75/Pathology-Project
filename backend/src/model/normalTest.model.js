import mongoose from "mongoose";
const userTests = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    reportTime: {
        type: String,
        require: true
    },
    sampleTYpe: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true

    }
}, {
    collection: "normaltest"
}) 

export const normalTest = mongoose.model("normaltest", userTests); 