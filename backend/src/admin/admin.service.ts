import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getDashboard() {
    const [siswa, guru, mutasi] = await Promise.all([
      this.prisma.student.count(),
      this.prisma.user.count({ where: { role: 'GURU' } }),
      this.prisma.mutasiSekolah.count(),
    ]);
    return { siswa, guru, mutasi };
  }
}