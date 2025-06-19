import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePendidikanSebelumnyaDto } from './dto/create-pendidikan-sebelumnya.dto';
import { UpdatePendidikanSebelumnyaDto } from './dto/update-pendidikan-sebelumnya.dto';

@Injectable()
export class PendidikanSebelumnyaService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePendidikanSebelumnyaDto) {
    return this.prisma.pendidikanSebelumnya.create({ data : data as any});
  }

  findAll() {
    return this.prisma.pendidikanSebelumnya.findMany();
  }

  findOne(id: string) {
    return this.prisma.pendidikanSebelumnya.findUnique({ where: { id } });
  }

  update(id: string, data: UpdatePendidikanSebelumnyaDto) {
    return this.prisma.pendidikanSebelumnya.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.pendidikanSebelumnya.delete({ where: { id } });
  }
}