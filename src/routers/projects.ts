import express from "express";
import * as projectsControllers from "../controllers/projects.js"

const router = express.Router();

router.get("/", projectsControllers.getProjects);
router.post("/", projectsControllers.createProject);
router.get("/:id", projectsControllers.getProject);
router.delete("/:id", projectsControllers.deleteProject);

export default router;