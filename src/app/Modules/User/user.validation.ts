import { z, ZodError } from "zod";

const FullNameValidationSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }),
  lastName: z.string({ required_error: "Last name is required" }),
});

const AddressValidationSchema = z.object({
  street: z.string({ required_error: "Street is required" }),
  city: z.string({ required_error: "City is required" }),
  country: z.string({ required_error: "Country is required" }),
});

export const UserValidationSchema = z.object({
  userId: z.number({ required_error: "User ID is required" }),
  username: z.string({ required_error: "Username is required" }),
  password: z.string({ required_error: "Password is required" }),
  fullName: FullNameValidationSchema,
  age: z.number({ required_error: "Age is required" }),
  email: z.string({ required_error: "Email is required" }),
  isActive: z.boolean({ required_error: "isActive is required" }),
  hobbies: z.array(z.string({ required_error: "Hobbies is required" })),
  address: AddressValidationSchema,
//   isDeleted: z.boolean({ required_error: "isDeleted is required" }),
});

export default UserValidationSchema;
