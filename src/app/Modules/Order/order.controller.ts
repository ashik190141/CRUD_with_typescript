/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { orderService } from "./order.service";


const addProduct = async (req: Request, res: Response) => {
    try {
        const { users } = req.body;
        const userId = req.params.userId;
        const result = await orderService.addProductIntoDB(users, userId);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: null,
        });
    } catch (err: any) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: {
                code: 404,
                description: "Order not added!",
            },
        });
    }
}

const getOrders = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const result = await orderService.getProductIntoDB(userId);
        console.log(result);
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}

export const orderController = {
    addProduct,
    getOrders
}