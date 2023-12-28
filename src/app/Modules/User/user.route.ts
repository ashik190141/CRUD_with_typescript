import express from 'express'
import { orderController } from '../Order/order.controller';
import { userController } from './user.controller';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get("/:userId", userController.getSingleUser);
router.put("/:userId", userController.updateUserInfo);
router.delete("/:userId", userController.deleteUser);

router.put("/:userId/orders", orderController.addProduct);
router.get("/:userId/orders", orderController.getOrders);
router.get("/:userId/orders/total-price", orderController.getTotalPrice);

export const userRoute = router