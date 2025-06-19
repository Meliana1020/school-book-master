import { PartialType } from '@nestjs/mapped-types';
import { CreatePelanggaranDto } from './create-pelanggaran.dto';

export class UpdatePelanggaranDto extends PartialType(CreatePelanggaranDto) {}
