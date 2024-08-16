import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import { db } from './db/drizzle';
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [Github],
})