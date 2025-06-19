import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
  import { api } from "@/lib/api";
  import { Student } from "@/types/student";
  
  // relasiKey: "orangTua" | "prestasi" | "pelanggaran" dst
  export default function RelasiDetailModal({
    open,
    siswa,
    relasiKey,
    relasiLabel,
    onClose,
  }: {
    open: boolean;
    siswa?: Student;
    relasiKey: string;
    relasiLabel: string;
    onClose: () => void;
  }) {
    const { data, isLoading, refetch } = useQuery({
      queryKey: ["siswa-detail", siswa?.id],
      queryFn: () =>
        api.get(`/students/${siswa?.id}/rekap`).then((res) => res.data.data),
      enabled: !!open && !!siswa,
    });
  
    const queryClient = useQueryClient();
  
    // Contoh hapus (perlu endpoint sesuai relasi, misal /orangtua/:id)
    const hapusItem = useMutation({
      mutationFn: async (id: string) => {
        // ganti path sesuai relasi
        return api.delete(`/${relasiKey.toLowerCase()}/${id}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["siswa-detail", siswa?.id] });
        refetch();
      },
    });
  
    if (!siswa) return null;
  
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {relasiLabel} - {siswa.namaLengkap}
            </DialogTitle>
          </DialogHeader>
          {isLoading ? (
            <div>Memuat...</div>
          ) : (
            <div>
              <Button
                className="mb-2"
                onClick={() => alert("Tampilkan modal tambah/edit relasi di sini")}
              >
                + Tambah {relasiLabel}
              </Button>
              <div className="space-y-2">
                {Array.isArray(data?.[relasiKey]) && data?.[relasiKey].length > 0 ? (
                  data[relasiKey].map((item: any) => (
                    <div className="border rounded px-2 py-1 flex justify-between items-center" key={item.id}>
                      <div>
                        {Object.keys(item).map((k) => (
                          <div key={k} className="text-xs">
                            <b>{k}:</b> {typeof item[k] === "string" ? item[k] : JSON.stringify(item[k])}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline" onClick={() => alert("Edit relasi (modal)")}>
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => hapusItem.mutate(item.id)}
                          disabled={hapusItem.isPending}
                        >
                          {hapusItem.isPending ? "Menghapus..." : "Hapus"}
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>Tidak ada data {relasiLabel}</div>
                )}
              </div>
            </div>
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