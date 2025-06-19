import { PartialType } from '@nestjs/mapped-types';
import { CreatePengembanganDiriDto } from './create-pengembangan-diri.dto';

export class UpdatePengembanganDiriDto extends PartialType(CreatePengembanganDiriDto) {}
