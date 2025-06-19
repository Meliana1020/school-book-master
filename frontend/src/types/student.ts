export interface Class {
    id: string;
    name: string;
  }
  
  export interface OrangTua {
    id: string;
    tipe?: string;
    namaLengkap?: string;
    pekerjaan?: string;
    // ...field lain
  }
  
  export interface Student {
    id: string;
    nisn: string;
    nomorIndukSiswa?: string;
    namaLengkap?: string;
    jenisKelamin?: string;
    tempatLahir?: string;
    tanggalLahir?: string;
    agama?: string;
    kewarganegaraan?: string;
    anakKe?: number;
    jumlahSaudara?: number;
    bahasaDiRumah?: string;
    beratBadan?: number;
    tinggiBadan?: number;
    golonganDarah?: string;
    alamat?: string;
    tempatTinggal?: string;
    transportasiSekolah?: string;
    jarakKeSekolah?: string;
    waktuTempuh?: number;
    pemegangPKH?: boolean;
    nomorPKH?: string;
    noKontak?: string;
    fotoMasuk?: string;
    fotoKeluar?: string;
    classId?: string;
    class?: Class;
    orangTua?: OrangTua[];
    // ...tambahkan field relasi lain jika perlu
  }