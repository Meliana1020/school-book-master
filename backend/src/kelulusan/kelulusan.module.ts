import { Module } from '@nestjs/common';
import { KelulusanService } from './kelulusan.service';
import { KelulusanController } from './kelulusan.controller';

@Module({
  controllers: [KelulusanController],
  providers: [KelulusanService],
})
export class KelulusanModule {}
