import { optional, z } from "zod";

export const createUserDTO = z.object({
  name: z.string().min(3, "name must be at least 3 chars"),
  email: z.string().email("invalid email"),
  isActive: z.boolean({
    required_error: "isActive is required",
    invalid_type_error: "isActive must be true or false",
  }),
  age: z.number().int().min(18,"age must be atleast 18")
  .max(60,"age must be atleast or less then 60"),
});

export const updateUserDTO = z.object({
  name: z.string().min(3).optional(),
  email: z.string().email().optional(),
  isActive: z.boolean().optional(),
   age: z.number().int().min(18).max(60),
});
