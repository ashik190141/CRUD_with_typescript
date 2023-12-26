/* eslint-disable @typescript-eslint/no-explicit-any */
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

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await userService.getUserIntoDB();
        res.status(200).json({
            success: true,
            message: "Users are retrieved successfully!",
            data: result,
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

const getSingleUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        // console.log(userId);
        const result = await userService.getSingleUserIntoDB(userId);
        res.status(200).json({
            success: true,
            message: "User data is retrieved successfully!",
            data: result,
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

const updateUserInfo =async (req:Request, res:Response) => {
    try {
        const { users } = req.body;
        const userId = req.params.userId;
        const result = await userService.updateUser(users, userId)
        
        if (!result) {
            res.status(404).json({
              success: false,
              message: "user does not exist"
            });
            return;
        }
        res.status(200).json({
          success: true,
          message: "User updated successfully!",
          data: await userService.getSingleUserIntoDB(userId),
        });
    } catch (err: any) {
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
    createUser,
    getAllUsers,
    getSingleUser,
    updateUserInfo
}