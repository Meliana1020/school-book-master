/*
  Warnings:

  - You are about to drop the column `address` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `birthDate` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "address",
DROP COLUMN "birthDate",
DROP COLUMN "gender",
DROP COLUMN "name",
ADD COLUMN     "agama" TEXT,
ADD COLUMN     "alamat" TEXT,
ADD COLUMN     "anakKe" INTEGER,
ADD COLUMN     "bahasaDiRumah" TEXT,
ADD COLUMN     "beratBadan" DOUBLE PRECISION,
ADD COLUMN     "fotoKeluar" TEXT,
ADD COLUMN     "fotoMasuk" TEXT,
ADD COLUMN     "golonganDarah" TEXT,
ADD COLUMN     "jarakKeSekolah" TEXT,
ADD COLUMN     "jenisKelamin" TEXT,
ADD COLUMN     "jumlahSaudara" INTEGER,
ADD COLUMN     "kewarganegaraan" TEXT,
ADD COLUMN     "namaLengkap" TEXT,
ADD COLUMN     "noKontak" TEXT,
ADD COLUMN     "nomorIndukSiswa" TEXT,
ADD COLUMN     "nomorPKH" TEXT,
ADD COLUMN     "pemegangPKH" BOOLEAN DEFAULT false,
ADD COLUMN     "tanggalLahir" TIMESTAMP(3),
ADD COLUMN     "tempatLahir" TEXT,
ADD COLUMN     "tempatTinggal" TEXT,
ADD COLUMN     "tinggiBadan" DOUBLE PRECISION,
ADD COLUMN     "transportasiSekolah" TEXT,
ADD COLUMN     "waktuTempuh" DOUBLE PRECISION;
