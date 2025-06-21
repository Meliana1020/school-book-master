import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-siswa.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
