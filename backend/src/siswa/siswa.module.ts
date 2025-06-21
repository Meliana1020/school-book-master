import { Module } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { SiswaController } from './siswa.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SiswaController],
  providers: [SiswaService],
})
export class SiswaModule {}
