import { Schema, model, connect } from "mongoose";
import { TOrder } from "./Order/order.interface";

const orderSchema = new Schema<TOrder>({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
},{
    toJSON: {
      transform(doc, ret) {
        delete ret._id;
      }
    },
  });

export const orderModel = model<TOrder>("users", orderSchema);