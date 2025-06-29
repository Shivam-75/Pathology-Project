import mongoose from "mongoose";

const billinSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    referedBy: {
        type: String,
        require:true
    },
    gender: {
        type: String,
        require:true
    },
    age: {
        type: Number,
        require:true
    },
    date: {
        type: String,
        require:true
    },
    test: {
        type: String,
        require:true
    },
    cashAmount: {
        type: Number,
        require:true
    },
    gPayAmount: {
        type: Number,
        require:true
    },
    discount: {
        type: Number,
        require:true
    },
    paidAmount: {
        type: Number,
        require:true
    },
    mobile: {
        type: Number,
        require:true
    },
    totalAmount: {
        type: String,
        require:true
    }

},{timestamps:true})

export const adminBillin = mongoose.model("Billing", billinSchema);