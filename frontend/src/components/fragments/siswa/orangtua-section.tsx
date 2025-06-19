import { useState } from "react";
import OrangTuaFormModal from "./orangtua-form-modal";
import { OrangTua } from "@/types/student";

interface OrangTuaSectionProps {
    orangTua: OrangTua[];
    siswaId: string;
  }
  export default function OrangTuaSection({ orangTua, siswaId }: OrangTuaSectionProps) {
    const [showForm, setShowForm] = useState(false);
    const [editData, setEditData] = useState<OrangTua | undefined>(undefined);
   
  return (
    <section className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">Data Orang Tua</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
        >
          + Tambah
        </button>
      </div>
      <table className="w-full border text-sm">
        <thead>
          <tr>
            <th className="border px-2">Tipe</th>
            <th className="border px-2">Nama</th>
            <th className="border px-2">Pekerjaan</th>
            <th className="border px-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {orangTua?.map((o, idx) => (
            <tr key={idx}>
              <td className="border px-2">{o.tipe}</td>
              <td className="border px-2">{o.namaLengkap}</td>
              <td className="border px-2">{o.pekerjaan}</td>
              <td className="border px-2">
                <button onClick={() => { setEditData(o); setShowForm(true); }} className="text-green-600 mr-2">Edit</button>
                <button className="text-red-600">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <OrangTuaFormModal open={showForm} orangTua={editData} siswaId={siswaId} onClose={() => { setShowForm(false); setEditData(undefined); }} />
    </section>
  );
}