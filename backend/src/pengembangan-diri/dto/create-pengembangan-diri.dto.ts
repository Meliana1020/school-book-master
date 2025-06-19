import { IsUUID, IsOptional, IsString } from 'class-validator';

export class CreatePengembanganDiriDto {
  @IsUUID()
  idSiswa: string;

  @IsOptional()
  @IsString()
  kelas?: string;

  @IsOptional()
  @IsString()
  tahunPelajaran?: string;

  @IsOptional()
  @IsString()
  uraianPengembanganDiri?: string;

  @IsOptional()
  @IsString()
  ttdWaliKelas?: string;
}