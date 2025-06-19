import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerSchema } from "@/validation/auth-schema";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type RegisterInput = z.infer<typeof registerSchema>;

export default function Register() {
  const [serverError, setServerError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: RegisterInput) =>
      api.post("/auth/register", data).then((res) => res.data),
    onSuccess: () => {
      navigate("/auth/login");
    },
    onError: (error: any) => {
      const msg = error?.response?.data?.message;
      setServerError(Array.isArray(msg) ? msg[0] : msg || "Registrasi gagal");
    },
  });

  const onSubmit = (data: RegisterInput) => {
    setServerError(null);
    mutation.mutate(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Registrasi Akun</h2>
        <Input
          label="Email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
          disabled={isSubmitting}
        />
        <Input
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
          disabled={isSubmitting}
        />
        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <select
            {...register("role")}
            className="w-full border px-3 py-2 rounded"
            disabled={isSubmitting}
            defaultValue=""
          >
            <option value="" disabled>
              Pilih Role
            </option>
            <option value="ADMIN">Admin</option>
            <option value="GURU">Guru</option>
            <option value="ORANG_TUA">Orang Tua</option>
            <option value="KEPALA_SEKOLAH">Kepala Sekolah</option>
          </select>
          {errors.role && (
            <span className="text-red-500 text-sm">{errors.role.message}</span>
          )}
        </div>
        <Input
          label="Nama"
          {...register("name")}
          error={errors.name?.message}
          disabled={isSubmitting}
        />
        {serverError && (
          <div className="text-red-500 text-sm">{serverError}</div>
        )}
        <Button
          type="submit"
          disabled={isSubmitting || mutation.isPending}
          className="w-full"
        >
          {mutation.isPending ? "Mendaftar..." : "Daftar"}
        </Button>
        <div className="text-sm text-center mt-2">
          Sudah punya akun?{" "}
          <a href="/auth/login" className="text-blue-600 hover:underline">
            Login di sini
          </a>
        </div>
      </form>
    </div>
  );
}
