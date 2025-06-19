import { IsUUID, IsOptional, IsDateString, IsString } from 'class-validator';

export class CreatePendidikanSebelumnyaDto {
  @IsUUID()
  idSiswa: string;

  @IsOptional()
  @IsDateString()
  tanggalMasuk?: Date;

  @IsOptional()
  @IsString()
  kelasMasuk?: string;

  @IsOptional()
  @IsString()
  asalSekolah?: string;

  @IsOptional()
  @IsString()
  alamatAsalSekolah?: string;

  @IsOptional()
  @IsString()
  nomorSttbIjazah?: string;

  @IsOptional()
  @IsDateString()
  tanggalSttbIjazah?: Date;
}