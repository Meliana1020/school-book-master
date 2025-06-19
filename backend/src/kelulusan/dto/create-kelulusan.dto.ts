import { IsUUID, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateKelulusanDto {
  @IsUUID()
  idSiswa: string;

  @IsOptional()
  @IsDateString()
  tanggalTamat?: Date;

  @IsOptional()
  @IsString()
  nomorIjazah?: string;

  @IsOptional()
  @IsString()
  nomorSKHUN?: string;

  @IsOptional()
  @IsString()
  melanjutkanKe?: string;

  @IsOptional()
  @IsString()
  namaSekolahTujuan?: string;

  @IsOptional()
  @IsString()
  alamatSekolahTujuan?: string;

  @IsOptional()
  @IsString()
  alasanTidakMelanjutkan?: string;
}