import { response } from "express";
import userModel from "../../models/user/user.Model.js"
import bcrypt from "bcrypt"


// route:  POST /api/user/
// desc:   creating a user
// access: NOT-PROTECTED
const createUser = async (req, res, next) => {
    try {

        // checking if email already exist
        if (await userModel.findOne({ email: req.body.email })) {
            res.status(400).json({ errorMsg: "E-mail already exist" });
        }

        const user = new userModel(req.body);

        //hashing password
        user.hashPassword = await bcrypt.hash(req.body.password, 10);

        user.role = "user";
        user.pointsGenerated = 0;
        user.nextFeedback = Date.now();

        //  saving user data in DB
        await user.save();
        res.status(201).json({ successMsg: "User created successfully" });
    }
    catch (err) {
        next(err);
    }
};


// route:  GET /api/user/
// desc:   get all users
// access: PROTECTED
const readAllUsers = async (req, res, next) => {
    try {
        const users = await userModel.find();
        res.status(200).send(users);
    }
    catch (err) {
        next(err);
    }
};


// route:  PATCH /api/user/
// desc:   update authenticated user
// access: PROTECTED
const updateUser = async (req, res, next) => {
    try {
        // const userId = req.user.id  
        const userId = "62349484b1cedbee13f0bdcf";

        // check if email already exist
        if (await userModel.findOne({ email: req.body.email })) {
            res.status(400).json({ errorMsg: "E-mail already exist" });// 400 for bad request
        }

        //hashing password
        let hashPassword;
        if (req.body.password !== undefined) {
            hashPassword = await bcrypt.hash(req.body.password, 10);
        }

        const updateduser = { hashPassword, ...req.body }
        await userModel.updateOne({ _id: userId }, { $set: updateduser });
        res.status(200).json({ successMsg: "Updated successfully" })
    }
    catch (err) {
        next(err);
    }
};


// route:  DELETE /api/user/
// desc:   delete authenticated user.
// access: PROTECTED
const deleteUser = async (req, res, next) => {
    try {
        // const userId = req.user.id  
        const userId = "62349484b1cedbee13f0bdcf";
        await userModel.deleteOne({_id: userId});
        res.status(200).send({ successMsg: "User deleted successfully" });
    }
    catch (err) {
        next(err);
    }
};



export {
    createUser,
    readAllUsers,
    updateUser,
    deleteUser
};