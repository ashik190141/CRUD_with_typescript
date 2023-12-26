/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model, connect } from "mongoose";
import { Address, FullName, TUser, TUserModel } from "./User/user.interface";
import bcrypt from 'bcrypt'
import Config from "../Config";

const FullName = new Schema<FullName>(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    }
)

const Address = new Schema<Address>({
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
});

const userSchema = new Schema<TUser, TUserModel>(
  {
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullName: FullName,
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    hobbies: { type: [String] },
    address: Address,
    isDeleted: { type: Boolean, default: false },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.isDeleted;
      }
    },
  }
);

userSchema.statics.isUserExist = async function (id: string) {
  const existingUser = await userModel.findOne({ userId:id });
  return existingUser;
}

userSchema.pre('save', async function (next) {
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(Config.bcrypt));
    next()
})

userSchema.post('save', async function (doc, next) {
    next();
})

userSchema.pre('find', async function (next) {
    this.find({ isDeleted : {$ne:true}});
    next()
})

userSchema.pre('findOne', async function (next) {
    this.find({ isDeleted : {$ne:true}});
    next()
})

export const userModel = model<TUser,TUserModel>('user', userSchema);