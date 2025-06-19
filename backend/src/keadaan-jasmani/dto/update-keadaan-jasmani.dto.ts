import { PartialType } from '@nestjs/mapped-types';
import { CreateKeadaanJasmaniDto } from './create-keadaan-jasmani.dto';

export class UpdateKeadaanJasmaniDto extends PartialType(CreateKeadaanJasmaniDto) {}