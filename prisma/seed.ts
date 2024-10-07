import { PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Hash the password
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Create users
  const user1 = await prisma.user.create({
    data: {
      name: "Nguyen Van Anh",
      email: "vananh@example.com",
      userType: "STUDENT",
      profile: {
        create: {
          bio: "Piano enthusiast",
          skillLevel: "intermediate",
          location: "Hanoi",
        },
      },
      password: hashedPassword,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Tran Thi Binh",
      email: "thibinh@example.com",
      userType: "TEACHER",
      Teacher: {
        create: {
          description: "Experienced piano teacher",
          demoLink: "https://example.com/demo",
          achievements: ["Award-winning pianist", "10 years teaching experience"],
        },
      },
      password: hashedPassword,
    },
    include: {
      Teacher: true,
    },
  });

  if (!user2.Teacher) {
    throw new Error("Teacher profile not created for user2");
  }

  // Create multiple courses
  const courses = await Promise.all([
    prisma.course.create({
      data: {
        title: "Piano for Beginners",
        description: "Learn the basics of piano",
        price: 1500000,
        courseType: "offline",
        address: "123 Tran Phu, Ba Dinh, Hanoi",
        skillLevel: "beginner",
        startDate: new Date("2024-06-01"),
        durationInWeeks: 8,
        maxStudents: 10,
        latitude: 21.0360,
        longitude: 105.8340,
        teacherId: user2.Teacher.id,
        courseImages: {
          create: [
            { url: "https://example.com/piano-course-image1.jpg" },
            { url: "https://example.com/piano-course-image2.jpg" },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: "Intermediate Piano Techniques",
        description: "Advance your piano skills",
        price: 2000000,
        courseType: "online",
        address: "Virtual Classroom",
        skillLevel: "intermediate",
        startDate: new Date("2024-07-15"),
        durationInWeeks: 10,
        maxStudents: 15,
        latitude: 21.0278,
        longitude: 105.8342,
        teacherId: user2.Teacher.id,
        courseImages: {
          create: [
            { url: "https://example.com/intermediate-piano-course.jpg" },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: "Jazz Piano Masterclass",
        description: "Explore the world of jazz piano",
        price: 2500000,
        courseType: "offline",
        address: "456 Nguyen Thai Hoc, Ba Dinh, Hanoi",
        skillLevel: "advanced",
        startDate: new Date("2024-08-01"),
        durationInWeeks: 12,
        maxStudents: 8,
        latitude: 21.0259,
        longitude: 105.8605,
        teacherId: user2.Teacher.id,
        courseImages: {
          create: [
            { url: "https://example.com/jazz-piano-masterclass.jpg" },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: "Classical Piano Repertoire",
        description: "Master classical piano pieces",
        price: 2200000,
        courseType: "offline",
        address: "789 Le Thanh Tong, Hoan Kiem, Hanoi",
        skillLevel: "advanced",
        startDate: new Date("2024-09-01"),
        durationInWeeks: 16,
        maxStudents: 6,
        latitude: 21.0245,
        longitude: 105.8412,
        teacherId: user2.Teacher.id,
        courseImages: {
          create: [
            { url: "https://example.com/classical-piano-repertoire.jpg" },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: "Piano Theory Fundamentals",
        description: "Understand the theory behind piano music",
        price: 1200000,
        courseType: "online",
        address: "Virtual Classroom",
        skillLevel: "beginner",
        startDate: new Date("2024-10-01"),
        durationInWeeks: 6,
        maxStudents: 20,
        latitude: 21.0278,
        longitude: 105.8342,
        teacherId: user2.Teacher.id,
        courseImages: {
          create: [
            { url: "https://example.com/piano-theory-fundamentals.jpg" },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: "Contemporary Piano Styles",
        description: "Explore modern piano techniques",
        price: 1800000,
        courseType: "offline",
        address: "101 Tran Hung Dao, Hoan Kiem, Hanoi",
        skillLevel: "intermediate",
        startDate: new Date("2024-11-15"),
        durationInWeeks: 9,
        maxStudents: 12,
        latitude: 21.0221,
        longitude: 105.8492,
        teacherId: user2.Teacher.id,
        courseImages: {
          create: [
            { url: "https://example.com/contemporary-piano-styles.jpg" },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: "Vietnamese Traditional Piano",
        description: "Explore traditional Vietnamese music on piano",
        price: 1700000,
        courseType: "offline",
        address: "202 Tran Quang Khai, Hoan Kiem, Hanoi",
        skillLevel: "intermediate",
        startDate: new Date("2025-01-10"),
        durationInWeeks: 8,
        maxStudents: 8,
        latitude: 21.0360,
        longitude: 105.8340,
        teacherId: user2.Teacher.id,
        courseImages: {
          create: [
            { url: "https://example.com/vietnamese-traditional-piano.jpg" },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: "Piano for Kids",
        description: "Fun and engaging piano lessons for children",
        price: 1000000,
        courseType: "offline",
        address: "303 Kim Ma, Ba Dinh, Hanoi",
        skillLevel: "beginner",
        startDate: new Date("2025-02-01"),
        durationInWeeks: 12,
        maxStudents: 10,
        latitude: 21.0360,
        longitude: 105.8340,
        teacherId: user2.Teacher.id,
        courseImages: {
          create: [
            { url: "https://example.com/piano-for-kids.jpg" },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: "Advanced Piano Techniques",
        description: "Master advanced piano techniques and performance skills",
        price: 2800000,
        courseType: "offline",
        address: "404 Doi Can, Ba Dinh, Hanoi",
        skillLevel: "advanced",
        startDate: new Date("2025-03-15"),
        durationInWeeks: 20,
        maxStudents: 5,
        latitude: 21.0259,
        longitude: 105.8605,
        teacherId: user2.Teacher.id,
        courseImages: {
          create: [
            { url: "https://example.com/advanced-piano-techniques.jpg" },
          ],
        },
      },
    }),
    prisma.course.create({
      data: {
        title: "Piano Accompaniment Skills",
        description: "Learn to accompany singers and other instruments",
        price: 1900000,
        courseType: "offline",
        address: "505 Thuy Khue, Tay Ho, Hanoi",
        skillLevel: "intermediate",
        startDate: new Date("2025-04-01"),
        durationInWeeks: 10,
        maxStudents: 8,
        latitude: 21.0478,
        longitude: 105.8192,
        teacherId: user2.Teacher.id,
        courseImages: {
          create: [
            { url: "https://example.com/piano-accompaniment-skills.jpg" },
          ],
        },
      },
    }),
  ]);

  const course = courses[0]; // Use the first course for the enrollment example

  // Create an enrollment
  await prisma.enrollment.create({
    data: {
      userId: user1.id,
      courseId: course.id,
      status: "pending",
    },
  });

  // Create a review
  await prisma.review.create({
    data: {
      rating: 5,
      comment: "Great teacher!",
      authorId: user1.id,
      teacherId: user2.Teacher.id,
    },
  });

  console.log("Database seeded successfully");
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
