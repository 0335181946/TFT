import express from 'express'
import Blog from '../models/blogModel.js';

const blogRouter = express.Router();


//add post
blogRouter.post('/add', async(req,res)=>{
    const newBlog = new Blog({
        title: req.body.title,
        description: req.body.description,
    });
    const blog = await newBlog.save();
    res.send({
        _id: blog._id,
        title: blog.title,
        description: blog.description,
        author: blog.author
    });
});

//get all blog
blogRouter.get('/all', async(req, res) =>{
    const blogs = await Blog.find();
    res.send(blogs);
});

//get blog id - admin
blogRouter.get('/find/:id', async(req, res) =>{
    const blog = await Blog.findById(req.params.id);
    if(blog){
        res.send(blog);
    }else{
        res.status(404).send({message: "user not found"});
    }
});

//count blog
blogRouter.get('/countBlogs', async(req,res) =>{
    try{
        const countBlogs = await Blog.countDocuments({author: 'Admin'});
        res.status(200).json({
            author: 'Admin', count: countBlogs
        }
        );
    }catch(err){
        console.log(err.message);
    }
});

//delete blog
blogRouter.delete('/delete/:id', async(req, res)=>{
    try{
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json('Blog xoa thanh cong!')
    }catch(err){
        console.log('khong the xoa');
    }
});


//update blog
blogRouter.put('/update', async(req, res) =>{

    const blog = await Blog.findById(req.body._id);

    if(blog){
        blog.title = req.body.title || body.title;
        blog.description = req.body.description || body.description;

        const updateBlog = await blog.save();
        res.send({
            _id: updateBlog._id,
            title: updateBlog.title,
            description: updateBlog.description,
            author: updateBlog.author

        });
    }else{
        res.status(401).send({message: 'blog not found'});
    }
});


export default blogRouter;