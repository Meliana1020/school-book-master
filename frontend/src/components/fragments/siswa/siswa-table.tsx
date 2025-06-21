import * as React from "react";
import { Student } from "@/types/student";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// import SiswaDetailModal from "./siswa-detail-modal";
import RelasiDetailModal from "./relasi-detail-modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

const RELASI = [
  { key: "orangTua", label: "Orangtua/Wali" },
  { key: "pendidikanSebelumnya", label: "Pendidikan Sebelumnya" },
  { key: "keadaanJasmani", label: "Kesehatan Jasmani" },
  { key: "beasiswa", label: "Beasiswa" },
  { key: "mutasiSekolah", label: "Mutasi Sekolah" },
  { key: "kelulusan", label: "Kelulusan" },
  { key: "dropOut", label: "Drop Out" },
  { key: "lainLain", label: "Lain-Lain" },
  { key: "perilaku", label: "Perilaku" },
  { key: "pengembanganDiri", label: "Pengembangan Diri" },
  { key: "prestasi", label: "Prestasi" },
  { key: "pelanggaran", label: "Pelanggaran" },
];

export default function SiswaTable({
  siswaList,
  onEdit,
}: {
  siswaList: Student[];
  onEdit: (siswa: Student) => void;
}) {
  // const [selected, setSelected] = React.useState<Student | null>(null);
  const [relasiModal, setRelasiModal] = React.useState<{
    siswa: Student;
    relasiKey: string;
    relasiLabel: string;
  } | null>(null);

  const queryClient = useQueryClient();

  const hapusSiswa = useMutation({
    mutationFn: (id: string) => api.delete(`/siswa/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-siswa-list"] });
    },
  });

  const handleDelete = (id: string) => {
    if (window.confirm("Yakin hapus siswa ini?")) {
      hapusSiswa.mutate(id);
    }
  };

  return (
    <>
      <div className="overflow-x-auto rounded shadow border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>NISN</TableHead>
              <TableHead>Nama Lengkap</TableHead>
              <TableHead>Jenis Kelamin</TableHead>
              <TableHead>Tempat, Tanggal Lahir</TableHead>
              <TableHead>Kelas</TableHead>
              {RELASI.map((r) => (
                <TableHead key={r.key}>{r.label}</TableHead>
              ))}
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {siswaList.map((siswa) => (
              <TableRow key={siswa.id}>
                <TableCell>{siswa.nisn}</TableCell>
                <TableCell>{siswa.namaLengkap ?? "-"}</TableCell>
                <TableCell>{siswa.jenisKelamin ?? "-"}</TableCell>
                <TableCell>
                  {siswa.tempatLahir ?? "-"},{" "}
                  {siswa.tanggalLahir
                    ? new Date(siswa.tanggalLahir).toLocaleDateString()
                    : "-"}
                </TableCell>
                <TableCell>{siswa.kelas ?? "-"}</TableCell>
                {/* Kolom relasi, tombol Detail */}
                {RELASI.map((r) => (
                  <TableCell key={r.key}>
                    <Button
                      variant="link"
                      className="p-0 h-auto"
                      onClick={() =>
                        setRelasiModal({
                          siswa,
                          relasiKey: r.key,
                          relasiLabel: r.label,
                        })
                      }
                    >
                      Detail
                    </Button>
                  </TableCell>
                ))}
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mr-2"
                    onClick={() => onEdit(siswa)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(siswa.id)}
                    disabled={hapusSiswa.isPending}
                  >
                    {hapusSiswa.isPending ? "Menghapus..." : "Hapus"}
                  </Button>
                  <a
                    href={`/siswa/${siswa.id}/pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 underline"
                  >
                    Detail Siswa
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* <SiswaDetailModal
        idSiswa={selected?.id || ""}
        open={!!selected}
        onClose={() => setSelected(null)}
      /> */}
      <RelasiDetailModal
        open={!!relasiModal}
        siswa={relasiModal?.siswa}
        relasiKey={relasiModal?.relasiKey ?? ""}
        relasiLabel={relasiModal?.relasiLabel ?? ""}
        onClose={() => setRelasiModal(null)}
      />
    </>
  );
}
