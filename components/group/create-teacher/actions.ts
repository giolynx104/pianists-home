"use server";

import { auth } from "@/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import sharp, { SharpOptions } from "sharp";

//TODO: Handle error

const s3Client = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY!,
  },
});



export const createTeacher = async (formData: FormData) => {
  const file = formData.get("file") as File;
  const session = await auth();
  const user = session!.user!;
  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME!,
    Key: file.name,
  });
  const currentUser = await prisma.user.findUnique({
    where: {
      email: user.email!,
    },
  });
  await prisma.teacher.create({
    data: {
      user: {
        connect: {
          id: currentUser!.id,
        },
      },
      description: formData.get("description") as string,
      demoLink: formData.get("demoLink") as string,
    },
  });
  revalidatePath("/profile");
  redirect("/profile");
};
