import { Schema, model, connect, Model } from "mongoose";

export type TOrder = {
    productName: string;
    price: number;
    quantity: number;
};
