import { userModel } from "../user.model";
import { TUser } from "./user.interface";


const createUserIntoDB = async (user: TUser) => {
    const result = await userModel.create(user);
    return result;
}

const getUserIntoDB = async () => {
    const result = await userModel.find({}, {
        username: 1, fullName: 1, age: 1, email: 1, address: 1
    });
    return result;
}

const getSingleUserIntoDB = async (id: string) => {
    // console.log(id);
    const result = await userModel.findOne({ userId:id }, {
        username:1,fullName:1,age:1,email:1,address:1
    });
    return result;
}

const updateUser = async (userInfo: TUser, id: string) => {
    const info = userInfo;
    const result = await userModel.updateOne(
        { userId: id },
        {
            $set: {
                age: info.age
            }
        }
    );
    return result;
}

export const userService = {
    createUserIntoDB,
    getUserIntoDB,
    getSingleUserIntoDB,
    updateUser
}