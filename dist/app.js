import express from 'express';
import dotenv from 'dotenv';
import projectsRouter from "./routers/projects.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const baseUrl = process.env.BASE_URL || "http://localhost";
app.use(express.json());
app.get("/", (req, res, next) => {
    res.json("Hello").status(200);
});
app.use("/projects", projectsRouter);
app.listen(port, () => {
    console.log(`Listening on the port  ${baseUrl}:${port}`);
});
