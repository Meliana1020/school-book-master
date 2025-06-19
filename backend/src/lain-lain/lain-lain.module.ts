import { Module } from '@nestjs/common';
import { LainLainService } from './lain-lain.service';
import { LainLainController } from './lain-lain.controller';

@Module({
  controllers: [LainLainController],
  providers: [LainLainService],
})
export class LainLainModule {}
