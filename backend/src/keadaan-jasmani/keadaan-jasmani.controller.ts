import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KeadaanJasmaniService } from './keadaan-jasmani.service';
import { CreateKeadaanJasmaniDto } from './dto/create-keadaan-jasmani.dto';
import { UpdateKeadaanJasmaniDto } from './dto/update-keadaan-jasmani.dto';

@Controller('keadaan-jasmani')
export class KeadaanJasmaniController {
  constructor(private readonly keadaanJasmaniService: KeadaanJasmaniService) {}

  @Post()
  create(@Body() createKeadaanJasmaniDto: CreateKeadaanJasmaniDto) {
    return this.keadaanJasmaniService.create(createKeadaanJasmaniDto);
  }

  @Get()
  findAll() {
    return this.keadaanJasmaniService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.keadaanJasmaniService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKeadaanJasmaniDto: UpdateKeadaanJasmaniDto) {
    return this.keadaanJasmaniService.update(id, updateKeadaanJasmaniDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.keadaanJasmaniService.remove(id);
  }
}