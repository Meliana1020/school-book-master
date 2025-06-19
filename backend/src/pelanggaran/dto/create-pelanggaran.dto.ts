import { IsUUID, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreatePelanggaranDto {
  @IsUUID()
  idSiswa: string;

  @IsOptional()
  @IsString()
  pelanggaran?: string;

  @IsOptional()
  @IsString()
  sanksi?: string;

  @IsOptional()
  @IsDateString()
  tanggal?: Date;
}