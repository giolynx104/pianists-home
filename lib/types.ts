import { Course, Enrollment, Prisma } from "@prisma/client";
import { z } from "zod";

export const courseFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Course name must be a string",
    })
    .max(100, "Course name is limited to 100 characters")
    .min(1, "Course name can't be empty"),
  description: z
    .string({
      invalid_type_error: "Description must be a string",
    })
    .max(1000, "Description is limited to 500 characters")
    .min(1, "Description can't be empty"),
  price: z.coerce.number().nonnegative().finite(),
  offline: z.boolean(),
});

export type CourseFormSchema = z.infer<typeof courseFormSchema>;

export const teacherFormSchema = z.object({
  description: z
    .string({ invalid_type_error: "Description must be a string" })
    .min(1, "Description can't be empty"),
  demoLink: z.string().regex(/^https?:\/\//, "Demo link must be a valid URL"),
  youtubeChannelLink: z
    .string()
    .regex(/^https?:\/\//, "Youtube channel link must be a valid URL")
    .optional(),
  facebookLink: z
    .string()
    .regex(/^https?:\/\//, "Facebook link must be a valid URL")
    .optional(),
  instagramLink: z
    .string()
    .regex(/^https?:\/\//, "Instagram link must be a valid URL")
    .optional(),
  xLink: z
    .string()
    .regex(/^https?:\/\//, "X link must be a valid URL")
    .optional(),
});

export type TeacherFormSchema = z.infer<typeof teacherFormSchema>;

export type EnrollmentWithCourse = Enrollment & {
  course: Course;
};

export const teacherIncludeAll: Prisma.TeacherInclude = {
  courses: true,
  user: true,
  teacherImages: true,
};

const TeacherIncludeAll = Prisma.validator<Prisma.TeacherDefaultArgs>()({
  include: teacherIncludeAll,
});

export type TeacherIncludeAll = Prisma.TeacherGetPayload<
  typeof TeacherIncludeAll
>;


