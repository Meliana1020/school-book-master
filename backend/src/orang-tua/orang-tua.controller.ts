import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrangTuaService } from './orang-tua.service';
import { CreateOrangTuaDto } from './dto/create-orang-tua.dto';
import { UpdateOrangTuaDto } from './dto/update-orang-tua.dto';

@Controller('orang-tua')
export class OrangTuaController {
  constructor(private readonly orangTuaService: OrangTuaService) {}

  @Post()
  create(@Body() createOrangTuaDto: CreateOrangTuaDto) {
    return this.orangTuaService.create(createOrangTuaDto);
  }

  @Get()
  findAll() {
    return this.orangTuaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orangTuaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrangTuaDto: UpdateOrangTuaDto) {
    return this.orangTuaService.update(id, updateOrangTuaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orangTuaService.remove(id);
  }
}