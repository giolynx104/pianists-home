"use server";

import { auth } from "@/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";
import { TeacherFormSchema } from "@/lib/types";
import { getUserOfVerifiedSessionAndRedirectIfNotSignedIn } from "@/lib/actions";
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

export const createTeacher = async (
  data: TeacherFormSchema,
  remoteUrls: string[]
) => {
  const user = await getUserOfVerifiedSessionAndRedirectIfNotSignedIn();
  await prisma.teacher.create({
    data: {
      user: {
        connect: {
          id: user.id,
        },
      },
      description: data.description,
      demoLink: data.demoLink,
      teacherImages: {
        create: remoteUrls.map((url) => ({ url: url.split("?")[0] })),
      },
    },
  });
  revalidatePath("/profile");
  redirect("/profile");
};
