import feedbacksModel from "../../models/feedbacks/feedbacks.Model.js";
import userModel from "../../models/user/user.Model.js";


// route:  POST api/feedbacks/
// desc:   creating feedback of an authenticated user.
// access: PROTECTED
const postFeedback = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.userId);

        // checking if user exist
        if (!user) {
            return res.status(401).json({ errorMsg: 'Unauthorized' }); // 401 for Unauthorized
        }

        const feedback = new feedbacksModel(req.body);
        feedback.userId = req.userId;
        
        // saving user feedback
        await feedback.save();

        // updating user
        user.pointsGenerated = user.pointsGenerated + 1;
        user.nextFeedbackDate = new Date(new Date().getTime() + 60 * 60 * 24 * 1000) // 24 hours = 60 * 60 * 24 * 1000)
        user.nextFeedbackTime = new Date().toLocaleTimeString();
        await user.save();

        return res.status(201).json({ successMsg: "Feedback generated!" }); //201 for created

    } catch (err) {
        next(err);
        console.log(err);
    }
};


// route:  GET api/feedbacks/
// desc:   reading all users feedbacks
// access: NOT-PROTECTED
const readAllfeedbacks = async (req, res, next) => {
    try {
        const feedbacks = await feedbacksModel.find().populate("userId");

        if (!feedbacks) {
            return res.status(500).json({ errorMsg: "Server Error" });
        }
        return res.status(200).send(feedbacks);
    } catch (err) {
        next(err);
        console.log(err);
    }
};


// route:  DELETE api/feedbacks/:id
// desc:   delete a single feedback by authenticated user by feedback _id.
// access: PROTECTED
const deleteSingleFeedback = (req, res, next) => {
    try {

        // const feedback

    } catch (err) {
        next(err);
        console.log(err);
    }
};

export {
    readAllfeedbacks,
    postFeedback,
    deleteSingleFeedback,
}