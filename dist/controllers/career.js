import prisma from "../prisma.js";
export const getCareers = async (req, res, next) => {
    const careers = await prisma.career.findMany();
    const academicCareer = careers.filter(career => career.type === "ACADEMIC");
    const professionalCareer = careers.filter(career => career.type === "PROFESSIONAL");
    res.status(200).json({ academicCareer, professionalCareer });
};
export const createCareer = async (req, res, next) => {
    const career = await prisma.career.create({
        data: req.body
    });
    res.status(201).json({ career });
};
export const getCareer = async (req, res, next) => {
    const careerId = parseInt(req.params.id);
    const career = await prisma.career.findUnique({
        where: {
            id: careerId
        }
    });
    if (!career) {
        res.status(404).json({ error: "Career not found" });
        return;
    }
    res.status(200).json({ career });
};
export const updateCareer = async (req, res, next) => {
    const careerId = parseInt(req.params.id);
    const career = await prisma.career.update({
        where: {
            id: careerId
        },
        data: req.body
    });
    res.status(200).json({ career });
};
export const deleteCareer = async (req, res, next) => {
    const careerId = parseInt(req.params.id);
    await prisma.career.delete({
        where: { id: careerId }
    });
    res.sendStatus(204);
};
