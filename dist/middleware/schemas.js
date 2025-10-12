import { WebType } from '@prisma/client';
import z from 'zod';
export const TagSchema = z.object({
    id: z.number().int().optional(),
    name: z.string(),
});
export const ProjectSchema = z.object({
    id: z.number().int().nonnegative().optional(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    category: z.enum(Object.values(WebType)),
    imageUrl: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
});
export const CreateProject = ProjectSchema.pick({
    title: true,
    description: true,
    tags: true,
    category: true,
    imageUrl: true,
}).strict();
