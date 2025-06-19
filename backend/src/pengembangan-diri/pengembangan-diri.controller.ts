import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PengembanganDiriService } from './pengembangan-diri.service';
import { CreatePengembanganDiriDto } from './dto/create-pengembangan-diri.dto';
import { UpdatePengembanganDiriDto } from './dto/update-pengembangan-diri.dto';

@Controller('pengembangan-diri')
export class PengembanganDiriController {
  constructor(private readonly pengembanganDiriService: PengembanganDiriService) {}

  @Post()
  create(@Body() createPengembanganDiriDto: CreatePengembanganDiriDto) {
    return this.pengembanganDiriService.create(createPengembanganDiriDto);
  }

  @Get()
  findAll() {
    return this.pengembanganDiriService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pengembanganDiriService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePengembanganDiriDto: UpdatePengembanganDiriDto) {
    return this.pengembanganDiriService.update(id, updatePengembanganDiriDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pengembanganDiriService.remove(id);
  }
}