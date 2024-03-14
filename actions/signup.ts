"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
export const signup = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  return { success: "user registered successfully" };
};
