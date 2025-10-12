import prisma from "../prisma.js";
export const getProjects = async (req, res, next) => {
    const projects = await prisma.project.findMany({
        orderBy: { createdAt: 'desc' }
    });
    res.status(200).json({ projects });
};
export const createProject = async (req, res, next) => {
    const { tags } = req.body;
    const project = await prisma.project.create({
        data: {
            ...req.body,
            tags: {
                connectOrCreate: tags.map((tagName) => ({
                    where: { name: tagName },
                    create: { name: tagName }
                }))
            }
        },
        include: {
            tags: { select: { name: true } }
        }
    });
    res.status(201).json({ project });
};
export const getProject = async (req, res, next) => {
    const projectId = parseInt(req.params.id);
    const project = await prisma.project.findUnique({
        where: {
            id: projectId
        }, include: {
            tags: true
        }
    });
    if (!project) {
        res.status(404).json({ error: "Project not found" });
        return;
    }
    const response = {
        ...project,
        tags: project.tags.map(tag => tag.name)
    };
    res.status(200).json({ project: response });
};
export const deleteProject = async (req, res, next) => {
    const projectId = parseInt(req.params.id);
    await prisma.project.delete({
        where: {
            id: projectId
        }
    });
    res.sendStatus(204);
};
