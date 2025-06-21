import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function SiswaDetailModal({ idSiswa, open, onClose }: { idSiswa: string, open: boolean, onClose: () => void }) {
  const pdfUrl = idSiswa ? `/siswa/${idSiswa}/pdf` : "";

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent style={{ maxWidth: 800, width: '95vw', minHeight: 600 }}>
        <DialogHeader>
          <DialogTitle>Detail Siswa (PDF)</DialogTitle>
        </DialogHeader>
        {idSiswa && (
          <iframe
            src={pdfUrl}
            style={{ width: '100%', height: '70vh', border: 'none' }}
            title="Detail Siswa PDF"
          />
        )}
        <DialogFooter>
          <Button onClick={() => window.open(pdfUrl, "_blank")}>Unduh/Cetak PDF</Button>
          <Button variant="secondary" onClick={onClose}>Tutup</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}