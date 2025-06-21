/*
  Warnings:

  - You are about to drop the column `classId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `Class` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_classId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "classId",
ADD COLUMN     "kelas" TEXT;

-- DropTable
DROP TABLE "Class";
