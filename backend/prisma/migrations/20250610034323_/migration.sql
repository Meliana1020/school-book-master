-- CreateTable
CREATE TABLE "OrangTua" (
    "id" TEXT NOT NULL,
    "idSiswa" TEXT NOT NULL,
    "tipe" TEXT DEFAULT 'Ayah',
    "namaLengkap" TEXT,
    "tempatLahir" TEXT,
    "tanggalLahir" TIMESTAMP(3),
    "agama" TEXT,
    "nik" TEXT,
    "pendidikanTerakhir" TEXT,
    "kebutuhanKhusus" TEXT,
    "pekerjaan" TEXT,
    "penghasilanPerBulan" INTEGER,
    "alamat" TEXT,
    "nomorTelepon" TEXT,

    CONSTRAINT "OrangTua_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PendidikanSebelumnya" (
    "id" TEXT NOT NULL,
    "idSiswa" TEXT NOT NULL,
    "tanggalMasuk" TIMESTAMP(3),
    "kelasMasuk" TEXT,
    "asalSekolah" TEXT,
    "alamatAsalSekolah" TEXT,
    "nomorSttbIjazah" TEXT,
    "tanggalSttbIjazah" TIMESTAMP(3),

    CONSTRAINT "PendidikanSebelumnya_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KeadaanJasmani" (
    "id" TEXT NOT NULL,
    "idSiswa" TEXT NOT NULL,
    "tahunAjaran" TEXT,
    "kelas" TEXT,
    "beratBadan" DOUBLE PRECISION,
    "tinggiBadan" DOUBLE PRECISION,
    "penyakit" TEXT,
    "kelainanJasmani" TEXT,

    CONSTRAINT "KeadaanJasmani_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beasiswa" (
    "id" TEXT NOT NULL,
    "idSiswa" TEXT NOT NULL,
    "tahunAjaran" TEXT,
    "kelas" TEXT,
    "pip" BOOLEAN DEFAULT false,
    "bosda" BOOLEAN DEFAULT false,
    "prestasi" TEXT,
    "jumlah" INTEGER,

    CONSTRAINT "Beasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MutasiSekolah" (
    "id" TEXT NOT NULL,
    "idSiswa" TEXT NOT NULL,
    "nomorSurat" TEXT,
    "tanggal" TIMESTAMP(3),
    "kelasDitinggalkan" TEXT,
    "alasan" TEXT,
    "npsnSekolahTujuan" TEXT,
    "nssSekolahTujuan" TEXT,
    "alamatSekolahTujuan" TEXT,

    CONSTRAINT "MutasiSekolah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kelulusan" (
    "id" TEXT NOT NULL,
    "idSiswa" TEXT NOT NULL,
    "tanggalTamat" TIMESTAMP(3),
    "nomorIjazah" TEXT,
    "nomorSKHUN" TEXT,
    "melanjutkanKe" TEXT,
    "namaSekolahTujuan" TEXT,
    "alamatSekolahTujuan" TEXT,
    "alasanTidakMelanjutkan" TEXT,

    CONSTRAINT "Kelulusan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DropOut" (
    "id" TEXT NOT NULL,
    "idSiswa" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3),
    "kelas" TEXT,
    "alasan" TEXT,

    CONSTRAINT "DropOut_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LainLain" (
    "id" TEXT NOT NULL,
    "idSiswa" TEXT NOT NULL,
    "catatanPenting" TEXT,

    CONSTRAINT "LainLain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perilaku" (
    "id" TEXT NOT NULL,
    "idSiswa" TEXT NOT NULL,
    "kelas" TEXT,
    "tahunPelajaran" TEXT,
    "uraianPerilaku" TEXT,
    "ttdWaliKelas" TEXT,

    CONSTRAINT "Perilaku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PengembanganDiri" (
    "id" TEXT NOT NULL,
    "idSiswa" TEXT NOT NULL,
    "kelas" TEXT,
    "tahunPelajaran" TEXT,
    "uraianPengembanganDiri" TEXT,
    "ttdWaliKelas" TEXT,

    CONSTRAINT "PengembanganDiri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prestasi" (
    "id" TEXT NOT NULL,
    "idSiswa" TEXT NOT NULL,
    "judul" TEXT,
    "deskripsi" TEXT,
    "tahun" INTEGER,

    CONSTRAINT "Prestasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pelanggaran" (
    "id" TEXT NOT NULL,
    "idSiswa" TEXT NOT NULL,
    "pelanggaran" TEXT,
    "sanksi" TEXT,
    "tanggal" TIMESTAMP(3),

    CONSTRAINT "Pelanggaran_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrangTua" ADD CONSTRAINT "OrangTua_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PendidikanSebelumnya" ADD CONSTRAINT "PendidikanSebelumnya_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KeadaanJasmani" ADD CONSTRAINT "KeadaanJasmani_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beasiswa" ADD CONSTRAINT "Beasiswa_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MutasiSekolah" ADD CONSTRAINT "MutasiSekolah_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kelulusan" ADD CONSTRAINT "Kelulusan_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DropOut" ADD CONSTRAINT "DropOut_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LainLain" ADD CONSTRAINT "LainLain_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Perilaku" ADD CONSTRAINT "Perilaku_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PengembanganDiri" ADD CONSTRAINT "PengembanganDiri_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prestasi" ADD CONSTRAINT "Prestasi_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pelanggaran" ADD CONSTRAINT "Pelanggaran_idSiswa_fkey" FOREIGN KEY ("idSiswa") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
