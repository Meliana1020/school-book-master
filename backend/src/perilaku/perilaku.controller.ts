import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerilakuService } from './perilaku.service';
import { CreatePerilakuDto } from './dto/create-perilaku.dto';
import { UpdatePerilakuDto } from './dto/update-perilaku.dto';

@Controller('perilaku')
export class PerilakuController {
  constructor(private readonly perilakuService: PerilakuService) {}

  @Post()
  create(@Body() createPerilakuDto: CreatePerilakuDto) {
    return this.perilakuService.create(createPerilakuDto);
  }

  @Get()
  findAll() {
    return this.perilakuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perilakuService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerilakuDto: UpdatePerilakuDto) {
    return this.perilakuService.update(id, updatePerilakuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perilakuService.remove(id);
  }
}