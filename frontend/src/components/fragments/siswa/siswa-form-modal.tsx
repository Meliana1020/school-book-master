import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { useForm } from "react-hook-form";
  import { useMutation, useQueryClient } from "@tanstack/react-query";
  import { api } from "@/lib/api";
  import React from "react";
  import { Student } from "@/types/student";
  
  type SiswaForm = {
    nisn: string;
    nomorIndukSiswa: string;
    namaLengkap: string;
    kelas: string;
    jenisKelamin: string;
    tempatLahir: string;
    tanggalLahir?: string;
    agama: string;
    kewarganegaraan: string;
    anakKe: number;
    jumlahSaudara: number;
    bahasaDiRumah?: string;
    beratBadan?: number;
    tinggiBadan?: number;
    golonganDarah?: string;
    alamat: string;
    tempatTinggal: string;
    transportasiSekolah: string;
    jarakKeSekolah?: string;
    waktuTempuh?: number;
    pemegangPKH?: boolean;
    nomorPKH?: string;
    noKontak: string;
    fotoMasuk?: string;
    fotoKeluar?: string;
  };
  
  export default function SiswaFormModal({
    open,
    onClose,
    siswa,
  }: {
    open: boolean;
    onClose: () => void;
    siswa?: Student | null;
  }) {
    const { register, handleSubmit, reset } = useForm<SiswaForm>({
      defaultValues: siswa
        ? {
            ...siswa,
            tanggalLahir: siswa.tanggalLahir
              ? siswa.tanggalLahir.slice(0, 10)
              : "",
          }
        : {
            nisn: "",
            nomorIndukSiswa: "",
            namaLengkap: "",
            kelas: "",
            jenisKelamin: "",
            tempatLahir: "",
            tanggalLahir: "",
            agama: "",
            kewarganegaraan: "",
            anakKe: 1,
            jumlahSaudara: 1,
            bahasaDiRumah: "",
            beratBadan: undefined,
            tinggiBadan: undefined,
            golonganDarah: "",
            alamat: "",
            tempatTinggal: "",
            transportasiSekolah: "",
            jarakKeSekolah: "",
            waktuTempuh: undefined,
            pemegangPKH: false,
            nomorPKH: "",
            noKontak: "",
            fotoMasuk: "",
            fotoKeluar: "",
          },
    });
  
    const queryClient = useQueryClient();
    const isEdit = !!siswa;
  
    const mutation = useMutation({
      mutationFn: (data: any) =>
        isEdit
          ? api.patch(`/siswa/${siswa?.id}`, data)
          : api.post("/siswa", data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["admin-siswa-list"] });
        onClose();
        reset();
      },
    });
  
    React.useEffect(() => {
      if (open) {
        reset(
          siswa
            ? {
                ...siswa,
                tanggalLahir: siswa.tanggalLahir
                  ? siswa.tanggalLahir.slice(0, 10)
                  : "",
              }
            : {
                nisn: "",
                nomorIndukSiswa: "",
                namaLengkap: "",
                kelas: "",
                jenisKelamin: "",
                tempatLahir: "",
                tanggalLahir: "",
                agama: "",
                kewarganegaraan: "",
                anakKe: 1,
                jumlahSaudara: 1,
                bahasaDiRumah: "",
                beratBadan: undefined,
                tinggiBadan: undefined,
                golonganDarah: "",
                alamat: "",
                tempatTinggal: "",
                transportasiSekolah: "",
                jarakKeSekolah: "",
                waktuTempuh: undefined,
                pemegangPKH: false,
                nomorPKH: "",
                noKontak: "",
                fotoMasuk: "",
                fotoKeluar: "",
              }
        );
      }
    }, [open, siswa, reset]);
  
    const onSubmit = (data: SiswaForm) => {
      const mappedData: any = {
        ...data,
        anakKe: data.anakKe ? parseInt(String(data.anakKe)) : 1,
        jumlahSaudara: data.jumlahSaudara ? parseInt(String(data.jumlahSaudara)) : 1,
        beratBadan: data.beratBadan !== undefined && data.beratBadan !== null ? parseFloat(String(data.beratBadan)) : undefined,
        tinggiBadan: data.tinggiBadan !== undefined && data.tinggiBadan !== null ? parseFloat(String(data.tinggiBadan)) : undefined,
        waktuTempuh: data.waktuTempuh !== undefined && data.waktuTempuh !== null ? parseFloat(String(data.waktuTempuh)) : undefined,
        pemegangPKH: !!data.pemegangPKH,
        tanggalLahir: data.tanggalLahir ? new Date(data.tanggalLahir).toISOString() : undefined,
      };
  
      [
        "nisn",
        "nomorIndukSiswa",
        "namaLengkap",
        "kelas",
        "jenisKelamin",
        "tempatLahir",
        "agama",
        "kewarganegaraan",
        "alamat",
        "tempatTinggal",
        "transportasiSekolah",
        "noKontak",
      ].forEach((key) => {
        if (mappedData[key] === undefined || mappedData[key] === null) mappedData[key] = "";
      });
  
      [
        "bahasaDiRumah",
        "golonganDarah",
        "jarakKeSekolah",
        "nomorPKH",
        "fotoMasuk",
        "fotoKeluar",
      ].forEach((key) => {
        if (mappedData[key] === undefined || mappedData[key] === null) mappedData[key] = "";
      });
  
      mutation.mutate(mappedData);
    };
  
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{isEdit ? "Edit Siswa" : "Tambah Siswa"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <Input {...register("nisn", { required: true })} placeholder="NISN *" />
            <Input {...register("nomorIndukSiswa", { required: true })} placeholder="Nomor Induk Siswa *" />
            <Input {...register("namaLengkap", { required: true })} placeholder="Nama Lengkap *" />
            <Input {...register("jenisKelamin", { required: true })} placeholder="Jenis Kelamin *" />
            <Input {...register("kelas", { required: true })} placeholder="Kelas *" />
            <Input {...register("tempatLahir", { required: true })} placeholder="Tempat Lahir *" />
            <Input {...register("tanggalLahir")} type="date" placeholder="Tanggal Lahir" />
            <Input {...register("agama", { required: true })} placeholder="Agama *" />
            <Input {...register("kewarganegaraan", { required: true })} placeholder="Kewarganegaraan *" />
            <Input {...register("anakKe", { required: true, valueAsNumber: true })} type="number" placeholder="Anak Ke-" />
            <Input {...register("jumlahSaudara", { required: true, valueAsNumber: true })} type="number" placeholder="Jumlah Saudara" />
            <Input {...register("bahasaDiRumah")} placeholder="Bahasa di Rumah" />
            <Input {...register("beratBadan", { valueAsNumber: true })} type="number" step="0.1" placeholder="Berat Badan (kg)" />
            <Input {...register("tinggiBadan", { valueAsNumber: true })} type="number" step="0.1" placeholder="Tinggi Badan (cm)" />
            <Input {...register("golonganDarah")} placeholder="Golongan Darah" />
            <Input {...register("alamat", { required: true })} placeholder="Alamat *" />
            <Input {...register("tempatTinggal", { required: true })} placeholder="Tempat Tinggal *" />
            <Input {...register("transportasiSekolah", { required: true })} placeholder="Transportasi ke Sekolah *" />
            <Input {...register("jarakKeSekolah")} placeholder="Jarak ke Sekolah" />
            <Input {...register("waktuTempuh", { valueAsNumber: true })} type="number" step="0.1" placeholder="Waktu Tempuh (menit)" />
            <div className="flex items-center gap-2">
              <input type="checkbox" {...register("pemegangPKH")} id="pkh" />
              <label htmlFor="pkh">Pemegang PKH</label>
            </div>
            <Input {...register("nomorPKH")} placeholder="Nomor PKH" />
            <Input {...register("noKontak", { required: true })} placeholder="No Kontak *" />
            <Input {...register("fotoMasuk")} placeholder="Foto Masuk (URL)" />
            <Input {...register("fotoKeluar")} placeholder="Foto Keluar (URL)" />
            <DialogFooter>
              <Button type="button" variant="secondary" onClick={onClose}>
                Batal
              </Button>
              <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? "Menyimpan..." : isEdit ? "Simpan" : "Tambah"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }