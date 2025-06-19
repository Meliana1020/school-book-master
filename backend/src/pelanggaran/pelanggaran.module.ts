import { Module } from '@nestjs/common';
import { PelanggaranService } from './pelanggaran.service';
import { PelanggaranController } from './pelanggaran.controller';

@Module({
  controllers: [PelanggaranController],
  providers: [PelanggaranService],
})
export class PelanggaranModule {}
