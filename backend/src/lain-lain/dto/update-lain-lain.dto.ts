import { PartialType } from '@nestjs/mapped-types';
import { CreateLainLainDto } from './create-lain-lain.dto';

export class UpdateLainLainDto extends PartialType(CreateLainLainDto) {}
