import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KelulusanService } from './kelulusan.service';
import { CreateKelulusanDto } from './dto/create-kelulusan.dto';
import { UpdateKelulusanDto } from './dto/update-kelulusan.dto';

@Controller('kelulusan')
export class KelulusanController {
  constructor(private readonly kelulusanService: KelulusanService) {}

  @Post()
  create(@Body() createKelulusanDto: CreateKelulusanDto) {
    return this.kelulusanService.create(createKelulusanDto);
  }

  @Get()
  findAll() {
    return this.kelulusanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kelulusanService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKelulusanDto: UpdateKelulusanDto) {
    return this.kelulusanService.update(id, updateKelulusanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kelulusanService.remove(id);
  }
}