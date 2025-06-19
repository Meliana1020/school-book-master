import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PelanggaranService } from './pelanggaran.service';
import { CreatePelanggaranDto } from './dto/create-pelanggaran.dto';
import { UpdatePelanggaranDto } from './dto/update-pelanggaran.dto';

@Controller('pelanggaran')
export class PelanggaranController {
  constructor(private readonly pelanggaranService: PelanggaranService) {}

  @Post()
  create(@Body() createPelanggaranDto: CreatePelanggaranDto) {
    return this.pelanggaranService.create(createPelanggaranDto);
  }

  @Get()
  findAll() {
    return this.pelanggaranService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pelanggaranService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePelanggaranDto: UpdatePelanggaranDto) {
    return this.pelanggaranService.update(id, updatePelanggaranDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pelanggaranService.remove(id);
  }
}