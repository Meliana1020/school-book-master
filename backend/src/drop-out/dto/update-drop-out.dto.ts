import { PartialType } from '@nestjs/mapped-types';
import { CreateDropOutDto } from './create-drop-out.dto';

export class UpdateDropOutDto extends PartialType(CreateDropOutDto) {}
