import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Query,
  Res,
} from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { CreateStudentDto } from './dto/create-siswa.dto';
import { UpdateStudentDto } from './dto/update-siswa.dto';
import PDFDocument from 'pdfkit';
import { Response } from 'express';

@Controller('siswa')
export class SiswaController {
  constructor(private readonly studentsService: SiswaService) {}

  @Get(':id/rekap')
  getRekapSiswa(@Param('id') id: string) {
    return this.studentsService.getRekapSiswa(id);
  }

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    const data = {
      ...createStudentDto,
      tanggalLahir: createStudentDto.tanggalLahir
        ? new Date(createStudentDto.tanggalLahir)
        : undefined,
    };
    return this.studentsService.create(data);
  }

  @Get()
  async findAll(@Query('q') q?: string) {
    return this.studentsService.findAll(q);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    const data = {
      ...updateStudentDto,
      tanggalLahir: updateStudentDto.tanggalLahir
        ? new Date(updateStudentDto.tanggalLahir)
        : undefined,
    };
    return this.studentsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }

  @Get(':id/pdf')
  async getSiswaPdf(@Param('id') id: string, @Res() res: Response) {
    const siswa = await this.studentsService.findOne(id);
    if (!siswa) {
      res.status(404).send('Siswa tidak ditemukan');
      return;
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `inline; filename="siswa-${siswa.nisn || siswa.id}.pdf"`
    );

    const doc = new PDFDocument();
    doc.pipe(res);

    // --- ISI PDF MULAI DI SINI ---
    doc.fontSize(18).text('DATA SISWA', { align: 'center' }).moveDown();
    doc.fontSize(12).text(`NISN: ${siswa.nisn || '-'}`);
    doc.text(`Nama: ${siswa.namaLengkap || '-'}`);
    doc.text(`Kelas: ${siswa.kelas || '-'}`);
    doc.text(`Jenis Kelamin: ${siswa.jenisKelamin || '-'}`);
    doc.text(`TTL: ${siswa.tempatLahir || '-'}, ${siswa.tanggalLahir ? new Date(siswa.tanggalLahir).toLocaleDateString() : '-'}`);
    doc.text(`Alamat: ${siswa.alamat || '-'}`);
    doc.moveDown();
    doc.fontSize(10).text('Dicetak pada: ' + new Date().toLocaleString(), { align: 'right' });

    doc.end();
  }
}
