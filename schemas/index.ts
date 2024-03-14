import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const SignupSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(6, {
    message: "Minimum 6 character Password is required",
  }),
});
