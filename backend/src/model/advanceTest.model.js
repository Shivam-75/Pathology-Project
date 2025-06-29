import mongoose from "mongoose";
const advanceTests = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    lab_rate: {
        type: Number,
        require: true
    },

    reporttime: {
        type: String,
        require: true
    },

    bloodsample: {
        type: String,
        require: true
    },
}, {
    collection: "advancetest"
}) 

export const advanceTest = mongoose.model("advancetest", advanceTests); 