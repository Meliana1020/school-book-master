import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBeasiswaDto } from './dto/create-beasiswa.dto';
import { UpdateBeasiswaDto } from './dto/update-beasiswa.dto';

@Injectable()
export class BeasiswaService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateBeasiswaDto) {
    return this.prisma.beasiswa.create({ data: data as any });
  }

  findAll() {
    return this.prisma.beasiswa.findMany();
  }

  findOne(id: string) {
    return this.prisma.beasiswa.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateBeasiswaDto) {
    return this.prisma.beasiswa.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.beasiswa.delete({ where: { id } });
  }
}