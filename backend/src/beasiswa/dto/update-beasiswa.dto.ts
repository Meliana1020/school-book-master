import { PartialType } from '@nestjs/mapped-types';
import { CreateBeasiswaDto } from './create-beasiswa.dto';

export class UpdateBeasiswaDto extends PartialType(CreateBeasiswaDto) {}