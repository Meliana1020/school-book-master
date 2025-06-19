import { PartialType } from '@nestjs/mapped-types';
import { CreateKelulusanDto } from './create-kelulusan.dto';

export class UpdateKelulusanDto extends PartialType(CreateKelulusanDto) {}
