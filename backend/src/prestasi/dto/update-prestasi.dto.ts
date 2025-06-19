import { PartialType } from '@nestjs/mapped-types';
import { CreatePrestasiDto } from './create-prestasi.dto';

export class UpdatePrestasiDto extends PartialType(CreatePrestasiDto) {}
