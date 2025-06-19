import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
  } from "@/components/ui/dialog";
  import { useQuery } from "@tanstack/react-query";
  import OrangTuaSection from "./orangtua-section";

  // ...import section lain
  import { Student } from "@/types/student";
  import { api } from "@/lib/api";
  
  interface SiswaDetailModalProps {
    siswa: Student | null;
    open: boolean;
    onClose: () => void;
  }
  
  export default function SiswaDetailModal({
    siswa,
    open,
    onClose,
  }: SiswaDetailModalProps) {
    const { data, isLoading } = useQuery({
      queryKey: ["siswa-detail", siswa?.id],
      queryFn: () => api.get(`/students/${siswa?.id}/rekap`).then((res) => res.data),
      enabled: !!open && !!siswa,
    });
  
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              Detail Siswa: {siswa?.namaLengkap}
            </DialogTitle>
            {/* DialogClose bisa dipakai untuk tombol close */}
          </DialogHeader>
          {isLoading ? (
            <div>Memuat detail...</div>
          ) : data ? (
            <div>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <b>NISN:</b> {data.nisn}
                </div>
                <div>
                  <b>Kelas:</b> {data.class?.name}
                </div>
                {/* ...tampilkan field utama lain */}
              </div>
              {/* Section Relasi */}
              <OrangTuaSection orangTua={data.orangTua} siswaId={data.id} />
              {/* ...section lain */}
            </div>
          ) : (
            <div>Data tidak ditemukan</div>
          )}
          <DialogClose
            asChild
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
          >
            <button aria-label="Close">✕</button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    );
  }