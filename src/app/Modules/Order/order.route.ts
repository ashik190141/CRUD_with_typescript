import express from "express";
import { orderController } from "./order.controller";

const router = express.Router();

router.put('/',orderController.addProduct)

export const orderRoute = router;