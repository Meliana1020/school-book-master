import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  password: z.string().min(6, { message: "Password minimal 6 karakter" }),
  role: z.enum(["ADMIN", "GURU", "ORANG_TUA", "KEPALA_SEKOLAH"], { required_error: "Role harus dipilih" }),
  name: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  password: z.string().min(6, { message: "Password minimal 6 karakter" }),
});