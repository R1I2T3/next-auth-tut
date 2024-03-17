import { getVerificationTokenByEmail } from "@/data/verificationToken";
import { v4 as uuid } from "uuid";
import prisma from "./db";
export const generateVerificationToken = async (email: string) => {
  const token = uuid();
  const expireIn = new Date(new Date().getTime() + 3600 * 1000);
  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await prisma.verificationToken.delete({ where: { id: existingToken.id } });
  }
  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires: expireIn,
    },
  });
  return verificationToken;
};
