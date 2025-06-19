import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SiswaTable from "@/components/fragments/siswa/siswa-table";
import SiswaFormModal from "@/components/fragments/siswa/siswa-form-modal";
import { api } from "@/lib/api";
import { Student } from "@/types/student";

export default function SiswaList() {
  const [search, setSearch] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [editSiswa, setEditSiswa] = useState<Student | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-siswa-list", search],
    queryFn: () =>
      api.get("/students", { params: { q: search } }).then((res) => res.data.data),
  });

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <h1 className="text-2xl font-bold">Daftar Siswa</h1>
        <div className="flex gap-2">
          <input
            className="border px-2 py-1 rounded"
            placeholder="Cari nama/NISN..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setShowCreate(true)}
            className="rounded bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700"
          >
            + Tambah Siswa
          </button>
        </div>
      </div>
      {isLoading && <div>Memuat data siswa...</div>}
      {error && <div className="text-red-500">Gagal memuat data.</div>}
      {data && (
        <SiswaTable
          siswaList={data}
          onEdit={setEditSiswa}
        />
      )}

      {/* Modal Tambah */}
      <SiswaFormModal open={showCreate} onClose={() => setShowCreate(false)} />

      {/* Modal Edit */}
      <SiswaFormModal
        open={!!editSiswa}
        onClose={() => setEditSiswa(null)}
        siswa={editSiswa}
      />
    </div>
  );
}