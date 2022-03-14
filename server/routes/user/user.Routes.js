import express from "express";
import {createUser} from "../../controllers/user/user.Controller.js"

const router = express.Router();

// route:  POST /api/user/
// desc:   creating a user
// access: NOT-PROTECTED
router.post("/", createUser);


export default router;