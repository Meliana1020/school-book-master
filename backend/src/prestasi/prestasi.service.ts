import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePrestasiDto } from './dto/create-prestasi.dto';
import { UpdatePrestasiDto } from './dto/update-prestasi.dto';

@Injectable()
export class PrestasiService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePrestasiDto) {
    return this.prisma.prestasi.create({ data: data as any });
  }

  findAll() {
    return this.prisma.prestasi.findMany();
  }

  findOne(id: string) {
    return this.prisma.prestasi.findUnique({ where: { id } });
  }

  update(id: string, data: UpdatePrestasiDto) {
    return this.prisma.prestasi.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.prestasi.delete({ where: { id } });
  }
}