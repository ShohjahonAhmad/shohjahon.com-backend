import { RequestHandler } from 'express';
import z from 'zod';
import * as schemas from './schemas.js'

const validateBody = (schema: z.ZodObject<any>):RequestHandler => (req, res, next) => {
    const result = schema.safeParse(req.body);

    if(!result.success){
        res.status(400).json(result.error.issues)
        return;
    }

    next()
}

export const validateParamId: RequestHandler = (req, res, next) => {
    const result = z.number().int().nonnegative().safeParse(parseInt(req.params.id));

    if(!result.success){
        res.status(400).json(result.error.issues)
        return;
    }
    
    next()
}


export const createProject = validateBody(schemas.CreateProject)