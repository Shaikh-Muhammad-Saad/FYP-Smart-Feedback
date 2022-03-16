import { response } from "express";
import userModel from "../../models/user/user.Model.js"


// route:  POST /api/user/
// desc:   creating a user
// access: NOT-PROTECTED
const createUser = async (req, res, next) => {
    try {
        if (await userModel.findOne({ email: req.body.email })) {
            res.status(400).json({ errorMsg: "E-mail already exist" });
        }
        const user = new userModel(req.body);
        user.role = "user";
        user.pointsGenerated = 0;
        user.nextFeedback = Date.now();
        await user.save();
        res.status(201).json({ successMsg: "User created successfully" });
    } catch (err) {
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
    } catch (err) {
        next(err);
    }
};


export {
    createUser,
    readAllUsers
};