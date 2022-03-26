import express from "express"
import cookieParser from "cookie-parser";
import connectDatabase from "./config/databaseConnection.js"
import userRoutes from "./routes/user/user.Routes.js"
import feedbacksRoutes from "./routes/feedbacks/feedbacks.Routes.js"
import questionRoutes from "./routes/questions/questions.Routes.js"
import errorHandler from "./middlewares/errorHandler.js"

// database connection
connectDatabase();

const app = express();
const port = process.env.PORT | 5555;

app.use(cookieParser());
app.use(express.json());

// api routes
app.use("/api/user", userRoutes);
app.use("/api/feedbacks", feedbacksRoutes);
app.use("/api/questions", questionRoutes);

app.use(errorHandler)

app.listen(port, () => console.log("server running on port# ", port));