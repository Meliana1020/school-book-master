import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async getRekapSiswa(id: string) {
    return this.prisma.student.findUnique({
      where: { id },
      include: {
        orangTua: true,
        prestasi: true,
        pelanggaran: true,
        perilaku: true,
        pendidikanSebelumnya: true,
        pengembanganDiri: true,
        beasiswa: true,
        dropOut: true,
        keadaanJasmani: true,
        kelulusan: true,
        mutasiSekolah: true,
        lainLain: true
      }
    })
  }

  async create(data: Prisma.StudentCreateInput) {
    try {
      return await this.prisma.student.create({ data });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('NISN sudah terdaftar');
      }
      throw error;
    }
  }  

  findAll() {
    return this.prisma.student.findMany();
  }

  findOne(id: string) {
    return this.prisma.student.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.StudentUpdateInput) {
    return this.prisma.student.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.student.delete({ where: { id } });
  }
}