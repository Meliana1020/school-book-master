import { Module } from '@nestjs/common';
import { DropOutService } from './drop-out.service';
import { DropOutController } from './drop-out.controller';

@Module({
  controllers: [DropOutController],
  providers: [DropOutService],
})
export class DropOutModule {}
