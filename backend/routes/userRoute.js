import express from 'express'
import User from '../models/userModel.js';
import brcypt from 'bcryptjs';

const userRouter = express.Router();

//login
userRouter.post('/login', async(req,res) =>{
    const user = await User.findOne({email: req.body.email});

    if(user){
        if(brcypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                username: user.username,
                email: user.email,
                password: user.password,
                isAdmin: user.isAdmin
            });
            return;
        }
    }
    res.status(401).send({message: "invalid password or email"});
});


//register
userRouter.post('/register', async(req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: brcypt.hashSync(req.body.password)
    });
    const user = await newUser.save();
    res.send({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin
    });
});

//update user
userRouter.put('/update', async(req, res) =>{
    const user = await User.findById(req.body._id);
    
    if(user){
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;

        if(req.body.password) {
            user.password = brcypt.hashSync(req.body.password);
        }
        const updateUser = await user.save();
        res.send({
            _id: updateUser._id,
            username: updateUser.username,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin
        });
    }else{
        res.status(401).send({
            message:'user not found'
        });
    }
});


//get all user - admin
userRouter.get('/all', async(req, res) =>{
    const users = await User.find();
    res.send(users);
});


//get user by id - admin
userRouter.get('/find/:id', async(req, res) =>{
    const user = await User.findById(req.params.id);
    if(user){
        res.send(user);
    }else{
        res.status(404).send({message: "user not found"});
    }

});

//count users
userRouter.get('/countUsers', async(req,res) =>{
    try{
        const countUsers = await User.countDocuments({isAdmin: false});
        res.status(200).json({
            isAdmin: false, count: countUsers
        }
        );
    }catch(err){
        console.log(err.message);
    }
});

//delete user
userRouter.delete('/delete/:id', async(req, res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('xoa user thanh cong!')
    }catch(err){
        console.log('xoa that bai');
    }
});




export default userRouter;