import { CareerType, WebType } from '@prisma/client';
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
    gitHub: z.string(),
    videoUrl: z.string(),
    imageUrl: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
});
export const CreateProject = ProjectSchema.pick({
    title: true,
    description: true,
    tags: true,
    category: true,
    gitHub: true,
    videoUrl: true,
    imageUrl: true,
}).strict();
export const CareerSchema = z.object({
    id: z.number().int().nonnegative().optional(),
    title: z.string(),
    description: z.string(),
    organization: z.string(),
    start_date: z.coerce.date(),
    end_date: z.coerce.date().optional(),
    type: z.enum(Object.values(CareerType)),
    isCurrent: z.boolean().default(false).optional()
}).refine((data) => {
    if (!data.isCurrent) {
        return !!data.end_date;
    }
    return true;
}, {
    message: "end_date is required when isCurrent is false",
    path: ["end_date"]
});
export const CreateCareer = CareerSchema.pick({
    title: true,
    description: true,
    organization: true,
    start_date: true,
    end_date: true,
    type: true,
    isCurrent: true
}).strict();
export const UpdateCareer = CreateCareer.partial().strict();
