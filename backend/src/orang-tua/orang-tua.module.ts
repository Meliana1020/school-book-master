import { Module } from '@nestjs/common';
import { OrangTuaService } from './orang-tua.service';
import { OrangTuaController } from './orang-tua.controller';

@Module({
  controllers: [OrangTuaController],
  providers: [OrangTuaService],
})
export class OrangTuaModule {}
