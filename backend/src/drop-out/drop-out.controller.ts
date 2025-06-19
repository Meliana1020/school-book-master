import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DropOutService } from './drop-out.service';
import { CreateDropOutDto } from './dto/create-drop-out.dto';
import { UpdateDropOutDto } from './dto/update-drop-out.dto';

@Controller('drop-out')
export class DropOutController {
  constructor(private readonly dropOutService: DropOutService) {}

  @Post()
  create(@Body() createDropOutDto: CreateDropOutDto) {
    return this.dropOutService.create(createDropOutDto);
  }

  @Get()
  findAll() {
    return this.dropOutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dropOutService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDropOutDto: UpdateDropOutDto) {
    return this.dropOutService.update(id, updateDropOutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dropOutService.remove(id);
  }
}