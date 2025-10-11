import { RequestHandler } from "express";
import prisma from "../prisma.js";

export const getProjects: RequestHandler= async (req, res, next) => {
    const projects = await prisma.projects.findMany({
        orderBy: {createdAt: 'desc'}
    });

    res.json(projects)
} 

export const createProject: RequestHandler = async (req, res, next) => {
    res.sendStatus(200)
}

export const getProject: RequestHandler = async (req, res, next) => {
    res.sendStatus(200)
}

export const deleteProject: RequestHandler = async (req, res, next) => {
    res.sendStatus(200)
}