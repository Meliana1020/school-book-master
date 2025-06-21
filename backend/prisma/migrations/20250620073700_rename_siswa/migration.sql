/*
  Warnings:

  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Beasiswa" DROP CONSTRAINT "Beasiswa_idSiswa_fkey";

-- DropForeignKey
ALTER TABLE "DropOut" DROP CONSTRAINT "DropOut_idSiswa_fkey";

-- DropForeignKey
ALTER TABLE "KeadaanJasmani" DROP CONSTRAINT "KeadaanJasmani_idSiswa_fkey";

-- DropForeignKey
ALTER TABLE "Kelulusan" DROP CONSTRAINT "Kelulusan_idSiswa_fkey";

-- DropForeignKey
ALTER TABLE "LainLain" DROP CONSTRAINT "LainLain_idSiswa_fkey";

-- DropForeignKey
ALTER TABLE "MutasiSekolah" DROP CONSTRAINT "MutasiSekolah_idSiswa_fkey";

-- DropForeignKey
ALTER TABLE "OrangTua" DROP CONSTRAINT "OrangTua_idSiswa_fkey";

-- DropForeignKey
ALTER TABLE "Pelanggaran" DROP CONSTRAINT "Pelanggaran_idSiswa_fkey";

-- DropForeignKey
ALTER TABLE "PendidikanSebelumnya" DROP CONSTRAINT "PendidikanSebelumnya_idSiswa_fkey";

-- DropForeignKey
ALTER TABLE "PengembanganDiri" DROP CONSTRAINT "PengembanganDiri_idSiswa_fkey";

-- DropForeignKey
ALTER TABLE "Perilaku" DROP CONSTRAINT "Perilaku_idSiswa_fkey";

-- DropForeignKey
ALTER TABLE "Prestasi" DROP CONSTRAINT "Prestasi_idSiswa_fkey";

-- DropTable
DROP TABLE "Student";

-- CreateTable
CREATE TABLE "Siswa" (
    "id" TEXT NOT NULL,
    "nisn" TEXT NOT NULL,
    "nomorIndukSiswa" TEXT,
    "namaLengkap" TEXT,
    "jenisKelamin" TEXT,
    "tempatLahir" TEXT,
    "tanggalLahir" TIMESTAMP(3),
    "agama" TEXT,
    "kewarganegaraan" TEXT,
    "anakKe" INTEGER,
    "jumlahSaudara" INTEGER,
    "bahasaDiRumah" TEXT,
    "beratBadan" DOUBLE PRECISION,
    "tinggiBadan" DOUBLE PRECISION,
    "golonganDarah" TEXT,
    "alamat" TEXT,
    "tempatTinggal" TEXT,
    "transportasiSekolah" TEXT,
    "jarakKeSekolah" TEXT,
    "waktuTempuh" DOUBLE PRECISION,
    "pemegangPKH" BOOLEAN DEFAULT false,
    "nomorPKH" TEXT,
    "noKontak" TEXT,
    "fotoMasuk" TEXT,
    "fotoKeluar" TEXT,
    "kelas" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Siswa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Siswa_nisn_key" ON "Siswa"("nisn");

-- AddForeignKey
ALTER TABLE "OrangTua" ADD CONSTRAINT "OrangTua_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PendidikanSebelumnya" ADD CONSTRAINT "PendidikanSebelumnya_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeadaanJasmani" ADD CONSTRAINT "KeadaanJasmani_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beasiswa" ADD CONSTRAINT "Beasiswa_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MutasiSekolah" ADD CONSTRAINT "MutasiSekolah_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kelulusan" ADD CONSTRAINT "Kelulusan_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DropOut" ADD CONSTRAINT "DropOut_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LainLain" ADD CONSTRAINT "LainLain_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Perilaku" ADD CONSTRAINT "Perilaku_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PengembanganDiri" ADD CONSTRAINT "PengembanganDiri_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prestasi" ADD CONSTRAINT "Prestasi_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pelanggaran" ADD CONSTRAINT "Pelanggaran_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
