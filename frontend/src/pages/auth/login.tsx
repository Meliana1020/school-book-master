import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginSchema } from "@/validation/auth-schema";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type LoginInput = z.infer<typeof loginSchema>;

export default function Login() {
  const [serverError, setServerError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: LoginInput) =>
      api.post("/auth/login", data).then((res) => res.data),
    onSuccess: (data) => {
        console.log(data);
      // Misal kamu dapat token, simpan ke localStorage/sessionStorage
      // localStorage.setItem("token", data.token);
      // Redirect ke dashboard
      navigate("/admin/dashboard");
    },
    onError: (error: any) => {
      const msg = error?.response?.data?.message;
      setServerError(Array.isArray(msg) ? msg[0] : msg || "Login gagal");
    },
  });

  const onSubmit = (data: LoginInput) => {
    setServerError(null);
    mutation.mutate(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
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
        {serverError && (
          <div className="text-red-500 text-sm">{serverError}</div>
        )}
        <Button
          type="submit"
          disabled={isSubmitting || mutation.isPending}
          className="w-full"
        >
          {mutation.isPending ? "Masuk..." : "Login"}
        </Button>
        <div className="text-sm text-center mt-2">
          Belum punya akun?{" "}
          <a href="/auth/register" className="text-blue-600 hover:underline">
            Daftar di sini
          </a>
        </div>
      </form>
    </div>
  );
}