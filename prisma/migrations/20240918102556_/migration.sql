/*
  Warnings:

  - Added the required column `durationInWeeks` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxStudents` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillLevel` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Course` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "durationInWeeks" INTEGER NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "maxStudents" INTEGER NOT NULL,
ADD COLUMN     "skillLevel" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
