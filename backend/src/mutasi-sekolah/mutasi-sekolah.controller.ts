import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MutasiSekolahService } from './mutasi-sekolah.service';
import { CreateMutasiSekolahDto } from './dto/create-mutasi-sekolah.dto';
import { UpdateMutasiSekolahDto } from './dto/update-mutasi-sekolah.dto';

@Controller('mutasi-sekolah')
export class MutasiSekolahController {
  constructor(private readonly mutasiSekolahService: MutasiSekolahService) {}

  @Post()
  create(@Body() createMutasiSekolahDto: CreateMutasiSekolahDto) {
    return this.mutasiSekolahService.create(createMutasiSekolahDto);
  }

  @Get()
  findAll() {
    return this.mutasiSekolahService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mutasiSekolahService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMutasiSekolahDto: UpdateMutasiSekolahDto) {
    return this.mutasiSekolahService.update(id, updateMutasiSekolahDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mutasiSekolahService.remove(id);
  }
}