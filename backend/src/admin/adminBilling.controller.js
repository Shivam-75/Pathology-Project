import { adminBillin } from "./billing.model.js";

export const adminBilling = async (req, res) => {
    try {
        const { name, referedBy, date, gender, age, cashAmount, gPayAmount, test, discount, paidAmount, mobile, totalAmount } = req.body;

        if (!name || !referedBy || !test || !date || !gender || !age || !cashAmount  || !paidAmount || !mobile) {
            return res.status(400).json({ message: "Fill All Coulumn " })
        }

        if (!req.user.isAdmin) {
            return res.status(400).json({
                message: "access denied user not a admin ",
                success: false
            })
        }

        await adminBillin.create({
            name,
            referedBy,
            gender,
            age,
            date,
            cashAmount,
            gPayAmount,
            discount,
            paidAmount,
            test,
            mobile,
            totalAmount

        })

        return res.status(201).json({
            message: "Successfull Added",
            success: true,
        })

    } catch (err) {
        return res.status(500).send({ message: "server side error", success: false })
    }

}


//? get data help of date

export const adminDataDate = async (req, res) => {
    try {
        const date = req.query.date;

        if (!date) {
            return res.status(400).json({
                message: "Date is required",
                success: false
            });
        }

        const datedata = await adminBillin.find({ date: date })
        return res.json({
            message: "successfull data fatched",
            success: true,
            data: datedata
        });
    } catch (err) {
        return res.json({
            message: "Server Error Data Not Fatch ",
            success: false
        })
    }
}

//? admin or not

export const getAdmin = async (req, res) => {
    try {
        const { isAdmin } = req.user;
        if (!isAdmin) {
            return res.status(401).json({ message: "Access Denied Not a Admin" });
        }
        return res.json({
            message: "Admin data",
            success: true,
            isAdmin: isAdmin
        })
    }
    catch (err) {
        return res.json({ message: "admin  Server error" })
    }
}

//? is doctor get;

export const Doctorset = async (req, res) => {
    try {

        const data = await adminBillin.find();
        if (!data) {
            return res.status(400).json({ message: "Data Not found ", success: false });
        }

        return res.status(200).json({ message: "Data Successfull fatched ", success: true, data: data });

    } catch (err) {
        return res.status(500).json({ message: "Server error doctor name not fatched ", success: false });
    }
}

//todo doctor data

export const details = async (req, res) => {
    const userId = req.params.userId.trim();
    try {
        const findDetails = await adminBillin.find({ referedBy:userId });
        if (!findDetails) {
            return res.status(400).json({message:"Doctor data Not Found .",success:false})
        }
        let totalPaid = findDetails.reduce((acc, curr) => {
            return acc + (curr.paidAmount || 0);
        }, 0);
        return res.status(200).json({ message: "Successfully data fatched ", success: true, totalPaid, findDetails});
    } catch (err) {
        return res.status(500).json({message:"Server doctor fatching error ",err:err.message,success:false})
    }
}