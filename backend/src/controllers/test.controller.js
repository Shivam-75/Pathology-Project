import { normalTest } from "../model/normalTest.model.js"
import { advanceTest } from "../model/advanceTest.model.js"


//? normal test list----------------------
export const Test1 = async (req, res)=>{
    try {
        const noramTestData = await normalTest.find();
        if (!noramTestData) {
            return res.status(401).json({
                message: "Test Not found",
                success:false
            })
        }
        return res.status(201).json({
            message: "Normal Test Data",
            success: true,
            data:noramTestData
        })
    } catch (err) {
        return res.json({
            message: "Server Error Data Not Fatch ",
            success: false
        })
    }
}

//! advance test list----------------------------------
export const Test2 = async (req, res)=>{
    try {
        const advanceTestData = await advanceTest.find();

        if (!advanceTestData) {
            return res.status(401).json({
                message: "Test Not found",
                success:false
            })
        }
        return res.status(201).json({
            message: "advance Test Data",
            success: true,
            data: advanceTestData
        })
    } catch (err) {
        return res.json({
            message: "Server Error Data Not Fatch ",
            success: false
        })
    }
}