import { Module } from '@nestjs/common';
import { MutasiSekolahService } from './mutasi-sekolah.service';
import { MutasiSekolahController } from './mutasi-sekolah.controller';

@Module({
  controllers: [MutasiSekolahController],
  providers: [MutasiSekolahService],
})
export class MutasiSekolahModule {}
