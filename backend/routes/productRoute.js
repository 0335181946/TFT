import express from 'express'
import Product from '../models/productModel.js';

const productRouter = express.Router();


//get all product
productRouter.get('/all', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});


//get product by id
productRouter.get('/find/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "product not found" });
    }
});


//count product
productRouter.get('/countProducts', async (req, res) => {
    try {
        const countProducts = await Product.countDocuments();
        res.status(200).json({ count: countProducts });
    } catch (err) {
        console.log(err.message);
    }
});

//delete product
productRouter.delete('/delete/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json('Product xoa thanh cong!')
    } catch (err) {
        console.log('khong the xoa product');
    }
});


//update product
productRouter.put('/update', async (req, res) => {

    const product = await Product.findById(req.body._id);

    if (product) {
        product.title = req.body.title || product.title;
        product.category = req.body.category || product.category;
        product.subcategory = req.body.subcategory || product.subcategory;
        product.description = req.body.description || product.description;
        product.price = req.body.price || product.price;
        product.sizes = req.body.sizes || product.sizes;
        product.image = req.body.image || product.image;
        product.imageOne = req.body.imageOne || product.imageOne;

        const updateProduct = await product.save();
        res.send({
            _id: updateProduct._id,
            title: updateProduct.title,
            category: updateProduct.category,
            subcategory: updateProduct.subcategory,
            description: updateProduct.description,
            price: updateProduct.price,
            sizes: updateProduct.sizes,
            image: updateProduct.image,
            imageOne: updateProduct.imageOne,

        });
    } else {
        res.status(401).send({ message: 'product not found' });
    }
});


//add product
productRouter.post('/add', async (req, res) => {
    const newProduct = new Product({
        title: req.body.title,
        category: req.body.category,
        subcategory: req.body.subcategory,
        description: req.body.description,
        price: req.body.price,
        sizes: req.body.sizes,
        image: req.body.image,
        imageOne: req.body.imageOne,

    });
    const product = await newProduct.save();
    res.send({
        _id: product._id,
        title: product.title,
        category: product.category,
        subcategory: product.subcategory,
        description: product.description,
        price: product.price,
        sizes: product.sizes,
        image: product.image,
        imageOne: product.imageOne,
    });
});


export default productRouter;