import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMutasiSekolahDto } from './dto/create-mutasi-sekolah.dto';
import { UpdateMutasiSekolahDto } from './dto/update-mutasi-sekolah.dto';

@Injectable()
export class MutasiSekolahService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateMutasiSekolahDto) {
    return this.prisma.mutasiSekolah.create({ data: data as any });
  }

  findAll() {
    return this.prisma.mutasiSekolah.findMany();
  }

  findOne(id: string) {
    return this.prisma.mutasiSekolah.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateMutasiSekolahDto) {
    return this.prisma.mutasiSekolah.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.mutasiSekolah.delete({ where: { id } });
  }
}