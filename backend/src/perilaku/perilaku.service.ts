import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePerilakuDto } from './dto/create-perilaku.dto';
import { UpdatePerilakuDto } from './dto/update-perilaku.dto';

@Injectable()
export class PerilakuService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePerilakuDto) {
    return this.prisma.perilaku.create({ data: data as any });
  }

  findAll() {
    return this.prisma.perilaku.findMany();
  }

  findOne(id: string) {
    return this.prisma.perilaku.findUnique({ where: { id } });
  }

  update(id: string, data: UpdatePerilakuDto) {
    return this.prisma.perilaku.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.perilaku.delete({ where: { id } });
  }
}