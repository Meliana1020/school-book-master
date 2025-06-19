import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDropOutDto } from './dto/create-drop-out.dto';
import { UpdateDropOutDto } from './dto/update-drop-out.dto';

@Injectable()
export class DropOutService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateDropOutDto) {
    return this.prisma.dropOut.create({ data: data as any });
  }

  findAll() {
    return this.prisma.dropOut.findMany();
  }

  findOne(id: string) {
    return this.prisma.dropOut.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateDropOutDto) {
    return this.prisma.dropOut.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.dropOut.delete({ where: { id } });
  }
}