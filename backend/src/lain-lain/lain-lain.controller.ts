import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LainLainService } from './lain-lain.service';
import { CreateLainLainDto } from './dto/create-lain-lain.dto';
import { UpdateLainLainDto } from './dto/update-lain-lain.dto';

@Controller('lain-lain')
export class LainLainController {
  constructor(private readonly lainLainService: LainLainService) {}

  @Post()
  create(@Body() createLainLainDto: CreateLainLainDto) {
    return this.lainLainService.create(createLainLainDto);
  }

  @Get()
  findAll() {
    return this.lainLainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lainLainService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLainLainDto: UpdateLainLainDto) {
    return this.lainLainService.update(id, updateLainLainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lainLainService.remove(id);
  }
}