import express, { Request, Response } from "express"
const app = express();
import cors from 'cors';
import { userRoute } from "./app/Modules/User/user.route";
import { orderRoute } from "./app/Modules/Order/order.route";
// const port = 3000;

app.use(express.json())
app.use(cors())

app.use('/api/users', userRoute)
// app.use('/api/users/:userId/orders', orderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;