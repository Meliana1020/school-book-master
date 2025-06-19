import { PartialType } from '@nestjs/mapped-types';
import { CreateMutasiSekolahDto } from './create-mutasi-sekolah.dto';

export class UpdateMutasiSekolahDto extends PartialType(CreateMutasiSekolahDto) {}
