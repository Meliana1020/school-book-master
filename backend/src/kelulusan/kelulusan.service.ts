import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKelulusanDto } from './dto/create-kelulusan.dto';
import { UpdateKelulusanDto } from './dto/update-kelulusan.dto';

@Injectable()
export class KelulusanService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateKelulusanDto) {
    return this.prisma.kelulusan.create({ data: data as any });
  }

  findAll() {
    return this.prisma.kelulusan.findMany();
  }

  findOne(id: string) {
    return this.prisma.kelulusan.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateKelulusanDto) {
    return this.prisma.kelulusan.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.kelulusan.delete({ where: { id } });
  }
}