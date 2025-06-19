import { Module } from '@nestjs/common';
import { KeadaanJasmaniService } from './keadaan-jasmani.service';
import { KeadaanJasmaniController } from './keadaan-jasmani.controller';

@Module({
  controllers: [KeadaanJasmaniController],
  providers: [KeadaanJasmaniService],
})
export class KeadaanJasmaniModule {}
