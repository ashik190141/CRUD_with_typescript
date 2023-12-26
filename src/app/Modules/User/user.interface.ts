import { Schema, model, connect, Model } from "mongoose";

export type Address = {
    street: string;
    city: string;
    country: string;
}

export type FullName = {
    firstName: string;
    lastName: string;
}


export type TUser = {
    userId: number;
    username: string;
    password: string;
    fullName: FullName;
    age: number;
    email: string;
    isActive: boolean;
    hobbies: Array<string>;
    address: Address;
    isDeleted?: boolean;
};

export interface TUserModel extends Model<TUser> {
    isUserExist(id:string) : Promise<TUser | null>
}