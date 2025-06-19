import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get(':id/rekap')
  getRekapSiswa(@Param('id') id: string){
    return this.studentsService.getRekapSiswa(id);
  }

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
  const data = {
    ...createStudentDto,
    tanggalLahir: createStudentDto.tanggalLahir ? new Date(createStudentDto.tanggalLahir) : undefined,
  };
  return this.studentsService.create(data);
}

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    const data = {
      ...updateStudentDto,
      tanggalLahir: updateStudentDto.tanggalLahir ? new Date(updateStudentDto.tanggalLahir) : undefined
    };
    return this.studentsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}