import { Module } from '@nestjs/common';
import { PendidikanSebelumnyaService } from './pendidikan-sebelumnya.service';
import { PendidikanSebelumnyaController } from './pendidikan-sebelumnya.controller';

@Module({
  controllers: [PendidikanSebelumnyaController],
  providers: [PendidikanSebelumnyaService],
})
export class PendidikanSebelumnyaModule {}
