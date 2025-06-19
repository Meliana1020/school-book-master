import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BeasiswaService } from './beasiswa.service';
import { CreateBeasiswaDto } from './dto/create-beasiswa.dto';
import { UpdateBeasiswaDto } from './dto/update-beasiswa.dto';

@Controller('beasiswa')
export class BeasiswaController {
  constructor(private readonly beasiswaService: BeasiswaService) {}

  @Post()
  create(@Body() createBeasiswaDto: CreateBeasiswaDto) {
    return this.beasiswaService.create(createBeasiswaDto);
  }

  @Get()
  findAll() {
    return this.beasiswaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.beasiswaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBeasiswaDto: UpdateBeasiswaDto) {
    return this.beasiswaService.update(id, updateBeasiswaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.beasiswaService.remove(id);
  }
}