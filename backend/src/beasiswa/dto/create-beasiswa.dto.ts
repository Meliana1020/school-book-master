import { IsUUID, IsOptional, IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateBeasiswaDto {
  @IsUUID()
  idSiswa: string;

  @IsOptional()
  @IsString()
  tahunAjaran?: string;

  @IsOptional()
  @IsString()
  kelas?: string;

  @IsOptional()
  @IsBoolean()
  pip?: boolean;

  @IsOptional()
  @IsBoolean()
  bosda?: boolean;

  @IsOptional()
  @IsString()
  prestasi?: string;

  @IsOptional()
  @IsNumber()
  jumlah?: number;
}