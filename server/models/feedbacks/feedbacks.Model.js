import mongoose from "mongoose";

const scheme = mongoose.Schema;


const feedbacksSchema = new mongoose.Schema({
    userId: {
        type: scheme.Types.ObjectId,
        ref: "user"
    },
    userFeedback: {
        type: String,
        required: true
    },
    averageRating: {
        type: Number,
        required: true
    },
    date:{
        type:Date,
        default: Date.now()
    }

});

const feedbacksModel = mongoose.model("feedback", feedbacksSchema);
export default feedbacksModel;