import {
  IsString,
  IsOptional,
  IsDateString,
  IsNumber,
  IsInt,
  IsBoolean,
} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  nisn: string;

  @IsString()
  nomorIndukSiswa: string;

  @IsString()
  namaLengkap: string;

  @IsString()
  kelas: string;

  @IsString()
  jenisKelamin: string;

  @IsString()
  tempatLahir: string;

  @IsOptional()
  @IsDateString()
  tanggalLahir?: string;

  @IsString()
  agama: string;

  @IsString()
  kewarganegaraan: string;

  @IsInt()
  anakKe: number;

  @IsInt()
  jumlahSaudara: number;

  @IsOptional()
  @IsString()
  bahasaDiRumah?: string;

  @IsOptional()
  @IsNumber()
  beratBadan?: number;

  @IsOptional()
  @IsNumber()
  tinggiBadan?: number;

  @IsOptional()
  @IsString()
  golonganDarah?: string;

  @IsString()
  alamat: string;

  @IsString()
  tempatTinggal: string;

  @IsString()
  transportasiSekolah: string;

  @IsOptional()
  @IsString()
  jarakKeSekolah?: string;

  @IsOptional()
  @IsNumber()
  waktuTempuh?: number;

  @IsOptional()
  @IsBoolean()
  pemegangPKH?: boolean;

  @IsOptional()
  @IsString()
  nomorPKH?: string;

  @IsString()
  noKontak: string;

  @IsOptional()
  @IsString()
  fotoMasuk?: string;

  @IsOptional()
  @IsString()
  fotoKeluar?: string;

  @IsOptional()
  @IsString()
  classId?: string;
}