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
    const result = await orderModel.findOne(
      { userId: parseInt(id) },
      {
        order: 1
      }
    );
    return result;
}

export const orderService = {
    addProductIntoDB,
    getProductIntoDB
};