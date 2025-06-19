import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLainLainDto } from './dto/create-lain-lain.dto';
import { UpdateLainLainDto } from './dto/update-lain-lain.dto';

@Injectable()
export class LainLainService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateLainLainDto) {
    return this.prisma.lainLain.create({ data: data as any });
  }

  findAll() {
    return this.prisma.lainLain.findMany();
  }

  findOne(id: string) {
    return this.prisma.lainLain.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateLainLainDto) {
    return this.prisma.lainLain.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.lainLain.delete({ where: { id } });
  }
}