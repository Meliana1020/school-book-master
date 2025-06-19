// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// async function main() {
//   // Seed satu siswa sebagai contoh
//   const siswa = await prisma.student.create({
//     data: {
//       nisn: '1234567890',
//       namaLengkap: 'Budi Santoso',
//       jenisKelamin: 'Laki-laki',
//       tanggalLahir: new Date('2010-01-01'),
//       agama: 'Islam',
//     },
//   });

//   // Orang Tua/Wali
//   await prisma.orangTua.createMany({
//     data: [
//       {
//         idSiswa: siswa.id,
//         tipe: 'Ayah',
//         namaLengkap: 'Pak Santoso',
//         agama: 'Islam',
//         pekerjaan: 'Pegawai Negeri',
//         penghasilanPerBulan: 5000000,
//         nomorTelepon: '08123456789',
//       },
//       {
//         idSiswa: siswa.id,
//         tipe: 'Ibu',
//         namaLengkap: 'Bu Sari',
//         agama: 'Islam',
//         pekerjaan: 'Ibu Rumah Tangga',
//         penghasilanPerBulan: 0,
//         nomorTelepon: '08129876543',
//       }
//     ]
//   });

//   // Pendidikan Sebelumnya
//   await prisma.pendidikanSebelumnya.create({
//     data: {
//       idSiswa: siswa.id,
//       asalSekolah: 'SDN 1 Jakarta',
//       alamatAsalSekolah: 'Jl. Merdeka No. 1',
//       nomorSttbIjazah: 'IJZ123456',
//       tanggalSttbIjazah: new Date('2019-06-15'),
//     }
//   });

//   // Keadaan Jasmani
//   await prisma.keadaanJasmani.create({
//     data: {
//       idSiswa: siswa.id,
//       tahunAjaran: '2024/2025',
//       kelas: 'VII A',
//       beratBadan: 40,
//       tinggiBadan: 150,
//       penyakit: 'Tidak ada',
//       kelainanJasmani: 'Tidak ada',
//     }
//   });

//   // Beasiswa
//   await prisma.beasiswa.create({
//     data: {
//       idSiswa: siswa.id,
//       tahunAjaran: '2024/2025',
//       kelas: 'VII A',
//       pip: true,
//       bosda: false,
//       prestasi: 'Juara Kelas',
//       jumlah: 1000000,
//     }
//   });

//   // Mutasi Sekolah
//   await prisma.mutasiSekolah.create({
//     data: {
//       idSiswa: siswa.id,
//       nomorSurat: 'SK-001',
//       tanggal: new Date('2025-01-15'),
//       kelasDitinggalkan: 'VII A',
//       alasan: 'Orang tua pindah tugas',
//       npsnSekolahTujuan: '12345678',
//       nssSekolahTujuan: '87654321',
//       alamatSekolahTujuan: 'Jl. Pindah Sekolah No. 2',
//     }
//   });

//   // Kelulusan
//   await prisma.kelulusan.create({
//     data: {
//       idSiswa: siswa.id,
//       tanggalTamat: new Date('2027-06-15'),
//       nomorIjazah: 'IJZ2027001',
//       nomorSKHUN: 'SKHUN2027001',
//       melanjutkanKe: 'SMA 1',
//       namaSekolahTujuan: 'SMA Negeri 1 Jakarta',
//       alamatSekolahTujuan: 'Jl. SMA No. 1',
//       alasanTidakMelanjutkan: null,
//     }
//   });

//   // Drop Out
//   await prisma.dropOut.create({
//     data: {
//       idSiswa: siswa.id,
//       tanggal: new Date('2026-03-10'),
//       kelas: 'VIII B',
//       alasan: 'Pindah ke luar kota',
//     }
//   });

//   // Lain-lain
//   await prisma.lainLain.create({
//     data: {
//       idSiswa: siswa.id,
//       catatanPenting: 'Sangat aktif di ekstrakurikuler Pramuka',
//     }
//   });

//   // Perilaku
//   await prisma.perilaku.create({
//     data: {
//       idSiswa: siswa.id,
//       kelas: 'VII A',
//       tahunPelajaran: '2024/2025',
//       uraianPerilaku: 'Rajin, disiplin, dan sopan',
//       ttdWaliKelas: 'Pak Guru',
//     }
//   });

//   // Pengembangan Diri
//   await prisma.pengembanganDiri.create({
//     data: {
//       idSiswa: siswa.id,
//       kelas: 'VII A',
//       tahunPelajaran: '2024/2025',
//       uraianPengembanganDiri: 'Aktif dalam kegiatan OSIS',
//       ttdWaliKelas: 'Pak Guru',
//     }
//   });

//   // Prestasi
//   await prisma.prestasi.create({
//     data: {
//       idSiswa: siswa.id,
//       judul: 'Juara 1 Lomba Matematika',
//       deskripsi: 'Juara 1 lomba matematika tingkat kota',
//       tahun: 2025,
//     }
//   });

//   // Pelanggaran
//   await prisma.pelanggaran.create({
//     data: {
//       idSiswa: siswa.id,
//       pelanggaran: 'Terlambat masuk kelas',
//       sanksi: 'Teguran lisan',
//       tanggal: new Date('2025-02-10'),
//     }
//   });

//   console.log('Seeder selesai!');
// }

// main()
//   .catch(e => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });