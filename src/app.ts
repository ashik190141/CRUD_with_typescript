import express, { Request, Response } from "express"
const app = express();
import cors from 'cors';
import { userRoute } from "./app/Modules/User/user.route";
// const port = 3000;

app.use(express.json())
app.use(cors())

app.use('/api/users', userRoute)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;