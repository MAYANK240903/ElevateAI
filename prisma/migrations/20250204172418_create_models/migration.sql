/*
  Warnings:

  - You are about to drop the column `growthRate` on the `IndustryInsight` table. All the data in the column will be lost.
  - Added the required column `gowthRate` to the `IndustryInsight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IndustryInsight" DROP COLUMN "growthRate",
ADD COLUMN     "gowthRate" DOUBLE PRECISION NOT NULL;
