import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PendidikanSebelumnyaService } from './pendidikan-sebelumnya.service';
import { CreatePendidikanSebelumnyaDto } from './dto/create-pendidikan-sebelumnya.dto';
import { UpdatePendidikanSebelumnyaDto } from './dto/update-pendidikan-sebelumnya.dto';

@Controller('pendidikan-sebelumnya')
export class PendidikanSebelumnyaController {
  constructor(private readonly pendidikanSebelumnyaService: PendidikanSebelumnyaService) {}

  @Post()
  create(@Body() createPendidikanSebelumnyaDto: CreatePendidikanSebelumnyaDto) {
    return this.pendidikanSebelumnyaService.create(createPendidikanSebelumnyaDto);
  }

  @Get()
  findAll() {
    return this.pendidikanSebelumnyaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pendidikanSebelumnyaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePendidikanSebelumnyaDto: UpdatePendidikanSebelumnyaDto) {
    return this.pendidikanSebelumnyaService.update(id, updatePendidikanSebelumnyaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pendidikanSebelumnyaService.remove(id);
  }
}
