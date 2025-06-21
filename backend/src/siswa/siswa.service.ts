import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SiswaService {
  constructor(private prisma: PrismaService) {}

  async getRekapSiswa(id: string) {
    return this.prisma.siswa.findUnique({
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

  async create(data: Prisma.SiswaCreateInput) {
    try {
      return await this.prisma.siswa.create({ data });
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

  async findAll(q?: string) {
    return this.prisma.siswa.findMany({
      where: q
        ? {
            OR: [
              { namaLengkap: { contains: q, mode: 'insensitive' } },
              { nisn: { contains: q, mode: 'insensitive' } },
              { kelas: { contains: q, mode: 'insensitive' } },
            ],
          }
        : undefined,
    });
  }

  findOne(id: string) {
    return this.prisma.siswa.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.SiswaUpdateInput) {
    return this.prisma.siswa.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.siswa.delete({ where: { id } });
  }
}