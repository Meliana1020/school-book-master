import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestasiService } from './prestasi.service';
import { CreatePrestasiDto } from './dto/create-prestasi.dto';
import { UpdatePrestasiDto } from './dto/update-prestasi.dto';

@Controller('prestasi')
export class PrestasiController {
  constructor(private readonly prestasiService: PrestasiService) {}

  @Post()
  create(@Body() createPrestasiDto: CreatePrestasiDto) {
    return this.prestasiService.create(createPrestasiDto);
  }

  @Get()
  findAll() {
    return this.prestasiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestasiService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrestasiDto: UpdatePrestasiDto) {
    return this.prestasiService.update(id, updatePrestasiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestasiService.remove(id);
  }
}