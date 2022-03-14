import express from "express"
import connectDatabase from "./config/databaseConnection.js"
import userRoutes from "./routes/user/user.Routes.js"
import errorHandler from "./middlewares/errorHandler.js"

// database connection
connectDatabase();

const app = express();
const port = process.env.PORT | 5555;

app.use(express.json())

// api routes
app.use("/api/user", userRoutes);

app.use(errorHandler)

app.listen(port, () => console.log("server running on port# ", port));