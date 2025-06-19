import { Injectable, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { Role } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(email: string, password: string, role: string, name?: string) {
    const hashed = await bcrypt.hash(password, 10);
    if (!Object.values(Role).includes(role as Role)) {
      throw new BadRequestException('Role tidak valid');
    }
    try {
      return await this.prisma.user.create({
        data: { email, password: hashed, role: role as Role, name },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Email sudah terdaftar');
      }
      throw error;
    }
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}