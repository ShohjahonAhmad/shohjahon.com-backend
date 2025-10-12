import express from "express";
import * as projectsControllers from "../controllers/projects.js"
import * as validation from "../middleware/validation.js"

const router = express.Router();

router.get("/", projectsControllers.getProjects);
router.post("/", validation.createProject, projectsControllers.createProject);
router.get("/:id", validation.validateParamId, projectsControllers.getProject);
router.delete("/:id", validation.validateParamId, projectsControllers.deleteProject);

export default router;