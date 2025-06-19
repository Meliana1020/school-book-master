import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePengembanganDiriDto } from './dto/create-pengembangan-diri.dto';
import { UpdatePengembanganDiriDto } from './dto/update-pengembangan-diri.dto';

@Injectable()
export class PengembanganDiriService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePengembanganDiriDto) {
    return this.prisma.pengembanganDiri.create({ data: data as any });
  }

  findAll() {
    return this.prisma.pengembanganDiri.findMany();
  }

  findOne(id: string) {
    return this.prisma.pengembanganDiri.findUnique({ where: { id } });
  }

  update(id: string, data: UpdatePengembanganDiriDto) {
    return this.prisma.pengembanganDiri.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.pengembanganDiri.delete({ where: { id } });
  }
}