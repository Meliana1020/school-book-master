import { IsUUID, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateMutasiSekolahDto {
  @IsUUID()
  idSiswa: string;

  @IsOptional()
  @IsString()
  nomorSurat?: string;

  @IsOptional()
  @IsDateString()
  tanggal?: Date;

  @IsOptional()
  @IsString()
  kelasDitinggalkan?: string;

  @IsOptional()
  @IsString()
  alasan?: string;

  @IsOptional()
  @IsString()
  npsnSekolahTujuan?: string;

  @IsOptional()
  @IsString()
  nssSekolahTujuan?: string;

  @IsOptional()
  @IsString()
  alamatSekolahTujuan?: string;
}