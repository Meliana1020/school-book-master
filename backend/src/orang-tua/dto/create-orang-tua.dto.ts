import { IsString, IsOptional, IsUUID, IsDateString, IsNumber } from 'class-validator';

export class CreateOrangTuaDto {
  @IsUUID()
  idSiswa: string;

  @IsOptional()
  @IsString()
  tipe?: string;

  @IsOptional()
  @IsString()
  namaLengkap?: string;

  @IsOptional()
  @IsString()
  tempatLahir?: string;

  @IsOptional()
  @IsDateString()
  tanggalLahir?: Date;

  @IsOptional()
  @IsString()
  agama?: string;

  @IsOptional()
  @IsString()
  nik?: string;

  @IsOptional()
  @IsString()
  pendidikanTerakhir?: string;

  @IsOptional()
  @IsString()
  kebutuhanKhusus?: string;

  @IsOptional()
  @IsString()
  pekerjaan?: string;

  @IsOptional()
  @IsNumber()
  penghasilanPerBulan?: number;

  @IsOptional()
  @IsString()
  alamat?: string;

  @IsOptional()
  @IsString()
  nomorTelepon?: string;
}