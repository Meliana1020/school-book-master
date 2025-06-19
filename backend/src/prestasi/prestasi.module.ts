import { Module } from '@nestjs/common';
import { PrestasiService } from './prestasi.service';
import { PrestasiController } from './prestasi.controller';

@Module({
  controllers: [PrestasiController],
  providers: [PrestasiService],
})
export class PrestasiModule {}
