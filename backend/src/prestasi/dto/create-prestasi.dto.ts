import { IsUUID, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreatePrestasiDto {
  @IsUUID()
  idSiswa: string;

  @IsOptional()
  @IsString()
  judul?: string;

  @IsOptional()
  @IsString()
  deskripsi?: string;

  @IsOptional()
  @IsNumber()
  tahun?: number;
}