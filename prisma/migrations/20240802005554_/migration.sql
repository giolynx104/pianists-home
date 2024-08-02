-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "courseId" INTEGER;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
