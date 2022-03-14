import mongoose from "mongoose";
const schema = mongoose.Schema;

const userModelSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        required:true
    },
    pointsGenerated: {
        type: Number,
    },
    contact: {
        phone1: {
            type: String,
            required: true
        },
        phone2: {
            type: String,
        },
    },
    nextFeedback:{
        type:Date,
        required:true
    },
    userImage:{
        type: String
    }
});

const userModel = mongoose.model("user", userModelSchema);
export default userModel;