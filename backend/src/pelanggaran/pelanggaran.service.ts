import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePelanggaranDto } from './dto/create-pelanggaran.dto';
import { UpdatePelanggaranDto } from './dto/update-pelanggaran.dto';

@Injectable()
export class PelanggaranService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePelanggaranDto) {
    return this.prisma.pelanggaran.create({ data: data as any });
  }

  findAll() {
    return this.prisma.pelanggaran.findMany();
  }

  findOne(id: string) {
    return this.prisma.pelanggaran.findUnique({ where: { id } });
  }

  update(id: string, data: UpdatePelanggaranDto) {
    return this.prisma.pelanggaran.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.pelanggaran.delete({ where: { id } });
  }
}