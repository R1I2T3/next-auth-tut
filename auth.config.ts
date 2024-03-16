import Credentials from "next-auth/providers/credentials";
import { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs";
export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedField = LoginSchema.safeParse(credentials);
        if (validatedField.success) {
          const { email, password } = validatedField.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;
          const isPasswordMatch = await bcrypt.compare(password, user.password);
          if (isPasswordMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
