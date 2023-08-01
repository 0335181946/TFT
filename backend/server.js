import express, { urlencoded } from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoute.js';
import userRouter from './routes/userRoute.js';
import blogRouter from './routes/blogRoute.js';
import productRouter from './routes/productRoute.js';
import categoryRouter from './routes/categoryRoute.js';
import subcategoryRouter from './routes/subcategoryRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//router
app.use('/api/seed',seedRouter);
app.use('/api/users',userRouter);
app.use('/api/blogs',blogRouter);
app.use('/api/products',productRouter);
app.use('/api/category',categoryRouter);
app.use('/api/subcategory',subcategoryRouter);
app.use('/api/orders',orderRouter);

//connect with db
dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() =>{
    console.log("conntect to DB!");
}).catch((error) =>{
    console.log(error.message);
})

//create port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});
