import { IsUUID, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateDropOutDto {
  @IsUUID()
  idSiswa: string;

  @IsOptional()
  @IsDateString()
  tanggal?: Date;

  @IsOptional()
  @IsString()
  kelas?: string;

  @IsOptional()
  @IsString()
  alasan?: string;
}