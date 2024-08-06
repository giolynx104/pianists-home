import { z } from "zod";

export const courseFormSchema = z.object({
  name: z
    .string({
      required_error: "Course name is required",
    })
    .max(100, "Course name is limited to 100 characters")
    .min(1, "Course name is required"),
  description: z
    .string({
      required_error: "Description is required",
    })
    .max(1000, "Description is limited to 500 characters")
    .min(1, "Description is required"),
  price: z.coerce.number().nonnegative().finite(),
});

export type CourseFormSchema = z.infer<typeof courseFormSchema>;
