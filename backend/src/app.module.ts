import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiswaModule } from './siswa/siswa.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrangTuaModule } from './orang-tua/orang-tua.module';
import { PendidikanSebelumnyaModule } from './pendidikan-sebelumnya/pendidikan-sebelumnya.module';
import { KeadaanJasmaniModule } from './keadaan-jasmani/keadaan-jasmani.module';
import { BeasiswaModule } from './beasiswa/beasiswa.module';
import { MutasiSekolahModule } from './mutasi-sekolah/mutasi-sekolah.module';
import { KelulusanModule } from './kelulusan/kelulusan.module';
import { DropOutModule } from './drop-out/drop-out.module';
import { LainLainModule } from './lain-lain/lain-lain.module';
import { PerilakuModule } from './perilaku/perilaku.module';
import { PengembanganDiriModule } from './pengembangan-diri/pengembangan-diri.module';
import { PrestasiModule } from './prestasi/prestasi.module';
import { PelanggaranModule } from './pelanggaran/pelanggaran.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [SiswaModule, PrismaModule, AuthModule, UsersModule, OrangTuaModule, PendidikanSebelumnyaModule, KeadaanJasmaniModule, BeasiswaModule, MutasiSekolahModule, KelulusanModule, DropOutModule, LainLainModule, PerilakuModule, PengembanganDiriModule, PrestasiModule, PelanggaranModule, AdminModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
