import express from 'express';
import { createProduct, getallProduct, updateProduct,deleteProduct } from '../Controllers/productController.js';
import { authMiddleware } from '../Middlewares/authMiddlewares.js';
import { adminMiddleware } from '../Middlewares/roleMiddlewares.js';

const router = express.Router();

router.post("/create", authMiddleware, adminMiddleware, createProduct);
router.get("/",getallProduct);
router.put("/update/:id", authMiddleware, adminMiddleware, updateProduct);
router.delete("/delete/:id", authMiddleware, adminMiddleware,deleteProduct);

export default router;