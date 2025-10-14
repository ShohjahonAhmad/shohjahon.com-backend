import express from 'express';
import dotenv from 'dotenv';
import projectsRouter from "./routers/projects.js";
import leetcodeRouter from "./routers/leetcode.js";
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';
import cors from 'cors';
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const baseUrl = process.env.BASE_URL || "http://localhost";
app.use(express.json());
app.use(cors());
app.get("/", (req, res, next) => {
    res.json("Hello").status(200);
});
app.use("/projects", projectsRouter);
app.use("/leetcode", leetcodeRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Listening on the port  ${baseUrl}:${port}`);
});
