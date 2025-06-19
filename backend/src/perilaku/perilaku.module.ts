import { Module } from '@nestjs/common';
import { PerilakuService } from './perilaku.service';
import { PerilakuController } from './perilaku.controller';

@Module({
  controllers: [PerilakuController],
  providers: [PerilakuService],
})
export class PerilakuModule {}
