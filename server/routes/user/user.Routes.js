import express from "express";
import {
    createUser,
    readAllUsers,
    updateUser,
    deleteUser
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


// route:  PATCH /api/user/
// desc:   update authenticated user
// access: PROTECTED
router.patch("/",updateUser);



// route:  DELETE /api/user/
// desc:   delete authenticated user.
// access: PROTECTED
router.delete("/",deleteUser);

export default router;