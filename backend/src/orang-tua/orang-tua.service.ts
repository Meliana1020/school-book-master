import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrangTuaDto } from './dto/create-orang-tua.dto';
import { UpdateOrangTuaDto } from './dto/update-orang-tua.dto';

@Injectable()
export class OrangTuaService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateOrangTuaDto) {
    return this.prisma.orangTua.create({ data: data as any });
  }

  findAll() {
    return this.prisma.orangTua.findMany();
  }

  findOne(id: string) {
    return this.prisma.orangTua.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateOrangTuaDto) {
    return this.prisma.orangTua.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.orangTua.delete({ where: { id } });
  }
}