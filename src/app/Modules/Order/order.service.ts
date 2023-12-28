import { orderModel } from "../order.model";
import { TOrder } from "./order.interface";


const addProductIntoDB = async (productInfo:TOrder ,id: string) => {
    const proInfo = productInfo;
    const result = await orderModel.updateOne(
        { userId: parseInt(id) },
        {
            $push: {
                order: proInfo,
            },
        },
        { upsert: true, strict:false }
    );
    
    return result;
};

const getProductIntoDB = async (id: string) => {
    const result = await orderModel.aggregate([
        {
            $match: {
                userId: parseInt(id)
            }
        },
        {
            $project: {
                _id:0,
                order:1
            }
        }
    ])
    return result;
}

const getTotalPrice = async (id: string) => {
    const result = await orderModel.aggregate([
        {
            $match: {
                userId: parseInt(id)
            }
        },
        {
            $unwind : "$order"
        },
        {
            $group: {
                _id: "$email",
                totalPrice: {$sum : "$order.price"}
            }
        },
        {
            $project: {
                _id: 0,
                totalPrice: 1
            }
        }
    ])
    return result;
}

export const orderService = {
    addProductIntoDB,
    getProductIntoDB,
    getTotalPrice
};