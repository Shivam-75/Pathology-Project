import { date, z } from "zod";

//? Register schema validator
export const registerSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(8, { message: "Email must be at least 8 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(3, { message: "Password must be at least 3 characters" })
        .max(255, { message: "Password must not be more than 255 characters" }),

    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(5, { message: "Name must be at least 5 characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),
});

//? Login schema validator
export const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(255, { message: "Password must not be more than 255 characters" }),
});


export const billingSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(5, { message: "Name must be at least 5 characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),

    age: z.preprocess(
        (val) => Number(val),
        z
            .number({ invalid_type_error: "Age must be a number" })
            .int()
            .min(0, { message: "Age must be a positive number" })
            .max(120, { message: "Age must be less than 120" })
    ),

    referedBy: z
        .string({ required_error: "Doctor data is important" })
        .trim(),

    mobile: z
        .string({ required_error: "Mobile number is required" })
        .regex(/^\d{10}$/, {
            message: "Mobile number must be exactly 10 digits",
        }),

    cashAmount: z.preprocess(
        (val) => Number(val),
        z.number().min(0, { message: "Cash Amount must be at least 0" })
    ),

    gPayAmount: z.preprocess(
        (val) => Number(val),
        z.number().min(0, { message: "GPay Amount must be at least 0" })
    ),

    date: z
        .string({ required_error: "Date is required" })
    ,
    gender: z.enum(["male", "female", "other"], {
        required_error: "Gender is required",
    }),

    test: z
        .string({ required_error: "Test is required" })
        .min(1, { message: "Please select a test" }),

    discount: z.preprocess(
        (val) => Number(val),
        z
            .number()
            .min(0, { message: "Discount cannot be negative" })
            .max(100, { message: "Discount cannot be more than 100%" })
    ),

    paidAmount: z.preprocess(
        (val) => Number(val),
        z.number().min(0, { message: "Paid Amount must be positive" })
    ),
});
