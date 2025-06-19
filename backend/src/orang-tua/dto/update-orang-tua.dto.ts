import { PartialType } from '@nestjs/mapped-types';
import { CreateOrangTuaDto } from './create-orang-tua.dto';

export class UpdateOrangTuaDto extends PartialType(CreateOrangTuaDto) {}