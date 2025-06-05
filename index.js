import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Config/dbConfig.js';
import authRoutes from './Routers/authRoutes.js';
import productRouters from './Routers/productRouters.js';
import cartRoutes from './Routers/cartRoutes.js';
import orderRoutes from './Routers/orderRoutes.js';
import paymentRoutes from './Routers/paymentRoutes.js';
import cors from 'cors';
dotenv.config();
const app = express();
// const cors = require('cors');


// const corsOptions ={
//     origin:'http://localhost:5000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
//app.use(cors(corsOptions));
app.use(cors({
  origin: 'http://localhost:5174', // Replace with your frontend URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
}));
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