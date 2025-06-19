import { Module } from '@nestjs/common';
import { BeasiswaService } from './beasiswa.service';
import { BeasiswaController } from './beasiswa.controller';

@Module({
  controllers: [BeasiswaController],
  providers: [BeasiswaService],
})
export class BeasiswaModule {}
