import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKeadaanJasmaniDto } from './dto/create-keadaan-jasmani.dto';
import { UpdateKeadaanJasmaniDto } from './dto/update-keadaan-jasmani.dto';

@Injectable()
export class KeadaanJasmaniService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateKeadaanJasmaniDto) {
    return this.prisma.keadaanJasmani.create({ data: data as any });
  }

  findAll() {
    return this.prisma.keadaanJasmani.findMany();
  }

  findOne(id: string) {
    return this.prisma.keadaanJasmani.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateKeadaanJasmaniDto) {
    return this.prisma.keadaanJasmani.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.keadaanJasmani.delete({ where: { id } });
  }
}