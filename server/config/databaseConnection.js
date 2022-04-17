import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        // local dadatabase connection string
        // await mongoose.connect('mongodb://localhost:27017/smartFeedback');
        
        // await mongoose.connect('mongodb+srv://saad:saad4983564@saadcluster.v97ui.mongodb.net/smartFeedback?retryWrites=true&w=majority');
     
        // mongoDB atlast connection string
        await mongoose.connect('mongodb+srv://AsifAli:asifali01@cluster1.8x10o.mongodb.net/smartFeedback?retryWrites=true&w=majority');
        
        console.log("DATABASE CONNECTED SUCCESSFULLY");
    } catch (err) {
        console.log("ERROR OCURED WHILE CONNECTING DATABASE ", err);
    }
};

export default connectDatabase;