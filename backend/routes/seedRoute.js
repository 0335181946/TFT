import express from 'express'
import data from '../data.js';
import User from '../models/userModel.js';
import Blog from '../models/blogModel.js';
import Product from '../models/productModel.js';
import Category from '../models/categoryModel.js';
import Subcategory from '../models/subcategoryModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async(req,res) =>{

    //seed for users
    await User.remove({});
    const createdUser = await User.insertMany(data.users);

    //seed for blogs
    await Blog.remove({});
    const createdBlog = await Blog.insertMany(data.blogs);

    //seed for products
    await Product.remove({});
    const createdProduct = await Product.insertMany(data.products);

     //seed for products
     await Category.remove({});
     const createdCategory = await Category.insertMany(data.category);

      //seed for products
    await Subcategory.remove({});
    const createdSubcategory = await Subcategory.insertMany(data.subcategory);

    


    res.send({createdUser, createdBlog, createdProduct,createdCategory,createdSubcategory });
});

export default seedRouter;