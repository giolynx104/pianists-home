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
    .max(1000, "Description is limited to 1000 characters")
    .min(1, "Description can't be empty"),
  price: z.coerce.number().nonnegative().finite(),
  offline: z.boolean(),
  address: z.string().min(1, "Address can't be empty"),
  skillLevel: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  startDate: z.date().min(new Date(), 'Start date must be in the future'),
  durationInWeeks: z.coerce.number().positive().int(),
  maxStudents: z.coerce.number().positive().int(),
  teacherId: z.string().min(1, "Teacher ID can't be empty"),
  longitude: z.coerce.number().min(-180).max(180, "Longitude must be between -180 and 180"),
  latitude: z.coerce.number().min(-90).max(90, "Latitude must be between -90 and 90"),
});

export type CourseFormSchema = z.infer<typeof courseFormSchema>;

export const teacherFormSchema = z.object({
  description: z
    .string({ invalid_type_error: "Description must be a string" })
    .min(1, "Description can't be empty"),
  demoLink: z.string().regex(/^https?:\/\//, "Demo link must be a valid URL"),
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

export const userFormSchema = z.object({
  name: z.string().min(1, "Name can't be empty"),
  youtubeChannelLink: z
    .string()
    .regex(/^https?:\/\/.*|$/, "Youtube channel link must be a valid URL"),
  facebookLink: z
    .string()
    .regex(/^(https?:\/\/[^\s]+)?$/, "Facebook link must be a valid URL"),
  instagramLink: z
    .string()
    .regex(/^https?:\/\/.*|$/, "Instagram link must be a valid URL"),
  xLink: z.string().regex(/^https?:\/\/.*|$/, "X link must be a valid URL"),
  location: z.string().optional(),
});

export type UserFormSchema = z.infer<typeof userFormSchema>;

export const teacherWithUserandImages =
  Prisma.validator<Prisma.TeacherDefaultArgs>()({
    include: {
      user: true,
      teacherImages: true,
    },
  });

export type TeacherWithUserandImages = Prisma.TeacherGetPayload<
  typeof teacherWithUserandImages
>;

export const teacherWithCourses = Prisma.validator<Prisma.TeacherDefaultArgs>()(
  {
    include: {
      courses: true,
    },
  }
);

export type TeacherWithCourses = Prisma.TeacherGetPayload<
  typeof teacherWithCourses
>;

export const courseIncludeTeacherIncludeUser =
  Prisma.validator<Prisma.CourseDefaultArgs>()({
    include: {
      teacher: {
        include: {
          user: true,
        },
      },
    },
  });

export type CourseIncludeTeacherIncludeUser = Prisma.CourseGetPayload<
  typeof courseIncludeTeacherIncludeUser
>;
