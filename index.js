import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Config/dbConfig.js';
import authRoutes from './Routers/authRoutes.js';
import productRouters from './Routers/productRouters.js';
import cartRoutes from './Routers/cardRoutes.js';
import orderRoutes from './Routers/orderRoutes.js';
import paymentRoutes from './Routers/paymentRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/products', productRouters);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes); 
app.use('/api/payment', paymentRoutes); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})