import express from "express";
import {
    createUser,
    readAllUsers
} from "../../controllers/user/user.Controller.js"

const router = express.Router();

// route:  POST /api/user/
// desc:   creating a user
// access: NOT-PROTECTED
router.post("/", createUser);


// route:  GET /api/user/
// desc:   get all users
// access: PROTECTED
router.get("/",readAllUsers);


export default router;