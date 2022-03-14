import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/smartFeedback');
        console.log("DATABASE CONNECTED SUCCESSFULLY");
    } catch (err) {
        console.log("ERROR OCURED WHILE CONNECTING DATABASE ", err);
    }
};

export default connectDatabase;