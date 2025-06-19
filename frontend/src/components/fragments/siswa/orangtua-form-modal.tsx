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

export default function OrangTuaFormModal({
  open,
  onClose,
  orangTua,
  siswaId,
}: {
  open: boolean;
  onClose: () => void;
  orangTua?: any;
  siswaId: string;
}) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: orangTua || {
      tipe: "",
      namaLengkap: "",
      pekerjaan: "",
      // field lain
    },
  });

  const queryClient = useQueryClient();
  const isEdit = !!orangTua;

  const mutation = useMutation({
    mutationFn: (data: any) =>
      isEdit
        ? api.patch(`/orang-tua/${orangTua.id}`, data)
        : api.post(`/orang-tua`, { ...data, idSiswa: siswaId }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      onClose();
      reset();
    },
  });

  React.useEffect(() => {
    if (open) {
      reset(
        orangTua || {
          tipe: "",
          namaLengkap: "",
          pekerjaan: "",
        }
      );
    }
  }, [open, orangTua, reset]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEdit ? "Edit Orang Tua" : "Tambah Orang Tua"}
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit((data) => mutation.mutate(data))}
          className="space-y-4"
        >
          <Input
            {...register("tipe", { required: true })}
            placeholder="Tipe (Ayah/Ibu)"
          />
          <Input
            {...register("namaLengkap", { required: true })}
            placeholder="Nama Lengkap"
          />
          <Input {...register("pekerjaan")} placeholder="Pekerjaan" />
          {/* Tambahkan field lain sesuai kebutuhan */}
          <DialogFooter>
            <Button type="button" variant="secondary" onClick={onClose}>
              Batal
            </Button>
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending
                ? "Menyimpan..."
                : isEdit
                ? "Simpan"
                : "Tambah"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
