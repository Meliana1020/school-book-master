import { IsUUID, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateKeadaanJasmaniDto {
  @IsUUID()
  idSiswa: string;

  @IsOptional()
  @IsString()
  tahunAjaran?: string;

  @IsOptional()
  @IsString()
  kelas?: string;

  @IsOptional()
  @IsNumber()
  beratBadan?: number;

  @IsOptional()
  @IsNumber()
  tinggiBadan?: number;

  @IsOptional()
  @IsString()
  penyakit?: string;

  @IsOptional()
  @IsString()
  kelainanJasmani?: string;
}