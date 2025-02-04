/*
  Warnings:

  - You are about to drop the column `gowthRate` on the `IndustryInsight` table. All the data in the column will be lost.
  - Added the required column `growthRate` to the `IndustryInsight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IndustryInsight" DROP COLUMN "gowthRate",
ADD COLUMN     "growthRate" DOUBLE PRECISION NOT NULL;
