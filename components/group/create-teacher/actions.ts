"use server";

import { auth } from "@/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Teacher } from "@prisma/client";
import crypto from "crypto";
const generateFileName = (bytes = 32) => {
  return crypto.randomBytes(bytes).toString("hex");
};

const s3Client = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

export const getSignedUrlConfigured = async (type: string) => {
  try {
    const session = await auth();
    if (!session) {
      return { error: "Unauthorized" };
    }

    const putObjectCommand = new PutObjectCommand({
      Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME!,
      Key: `${generateFileName()}.${type.split("/")[1]}`,
      ContentType: type,
    });

    const signedUrl = await getSignedUrl(s3Client, putObjectCommand, {
      expiresIn: 360,
    });
    return { success: { url: signedUrl } };
  } catch (error) {
    console.error("Error generating signed URL:", error);
    return { error: "Failed to generate signed URL" };
  }
};

export const createTeacher = async (data: Teacher, fileRemoteUrl: string) => {
  try {
    const session = await auth();
    const user = session!.user!;
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
        description: data.description,
        demoLink: data.demoLink,
        images: {
          create: {
            url: fileRemoteUrl.split("?")[0],
          },
        },
      },
    });
    revalidatePath("/profile");
    redirect("/profile");
  } catch (error) {
    console.error("Error creating teacher:", error);
  }
};
