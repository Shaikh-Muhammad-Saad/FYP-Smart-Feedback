
import express from "express";
import {
    readAllfeedbacks,
    postFeedback,
    deleteSingleFeedback,
    updateSingleFeedback,
    readUserFeedbacks
} from "../../controllers/feedbacks/feedbacks.Controller.js"
import authentication from "../../middlewares/authentication.js"


const router = express.Router();

// route:  POST api/feedbacks/
// desc:   creating feedback of an authenticated user.
// access: PROTECTED
router.post("/", authentication, postFeedback);


// route:  GET api/feedbacks/
// desc:   reading all users feedbacks.
// access: NOT-PROTECTED
router.get("/", readAllfeedbacks);


// route:  GET api/feedbacks/:id
// desc:   reading authenticated user feedbacks.
// access: NOT-PROTECTED
router.get("/:id", readUserFeedbacks);


// route:  DELETE api/feedbacks/:id
// desc:   delete a single feedback by authenticated user by feedback _id.
// access: PROTECTED
router.delete("/:id", authentication, deleteSingleFeedback);


// route:  PATCH api/feedbacks/:id
// desc:   update a single feedback by authenticated user by feedback _id.
// access: PROTECTED
router.patch("/:id", authentication, updateSingleFeedback);


export default router;