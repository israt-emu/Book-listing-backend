/*
  Warnings:

  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "USER_ROLE" AS ENUM ('admin', 'customer');

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" SET DATA TYPE TEXT,
DROP COLUMN "role",
ADD COLUMN     "role" "USER_ROLE" DEFAULT 'customer';

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
