import express from 'express';
import { authMiddleware } from '../Middlewares/authMiddlewares.js';
import { getAllOrders, getMyOrders, placeOrder, updateOrderStatus } from '../Controllers/oderController.js';
import { adminMiddleware } from '../Middlewares/roleMiddlewares.js';

const router = express.Router();

router.post('/create', authMiddleware, placeOrder);
router.get('/', authMiddleware, adminMiddleware, getAllOrders);
router.get('/my-orders', authMiddleware, getMyOrders);
router.put("/update/:id", authMiddleware, adminMiddleware, updateOrderStatus);

export default router;