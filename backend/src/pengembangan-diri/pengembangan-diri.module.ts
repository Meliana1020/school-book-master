import { Module } from '@nestjs/common';
import { PengembanganDiriService } from './pengembangan-diri.service';
import { PengembanganDiriController } from './pengembangan-diri.controller';

@Module({
  controllers: [PengembanganDiriController],
  providers: [PengembanganDiriService],
})
export class PengembanganDiriModule {}
