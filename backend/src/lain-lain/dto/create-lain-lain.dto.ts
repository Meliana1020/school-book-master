import { IsUUID, IsOptional, IsString } from 'class-validator';

export class CreateLainLainDto {
  @IsUUID()
  idSiswa: string;

  @IsOptional()
  @IsString()
  catatanPenting?: string;
}