import { z } from 'zod';

export const createPropertySchema = z.object({
  name: z.string().min(5, { error: 'custom error message' }),
  id: z.number().positive({ error: 'custom error message' }),
  age: z.number().positive(),
});

export type CreatePropertyZodDto = z.infer<typeof createPropertySchema>;
