import { Request, Response } from "express";
import { userService } from "./user.service";
import UserValidationSchema from "./user.validation";


const createUser = async(req: Request, res: Response) => {
    try {
        const {users} = req.body;
        const zodParsedData = UserValidationSchema.parse(users);
        const result = await userService.createUserIntoDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: {
                code: 404,
                description: "User not found!",
            },
        });
    }
}

export const userController = {
    createUser
}