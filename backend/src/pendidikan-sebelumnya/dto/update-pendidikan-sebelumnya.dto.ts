import { PartialType } from '@nestjs/mapped-types';
import { CreatePendidikanSebelumnyaDto } from './create-pendidikan-sebelumnya.dto';

export class UpdatePendidikanSebelumnyaDto extends PartialType(CreatePendidikanSebelumnyaDto) {}