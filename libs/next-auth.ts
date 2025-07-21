import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
// 移除MongoDB相关导入
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import config from "@/config";
// import connectMongo from "./mongo";

// 添加Supabase相关导入
import { SupabaseAdapter } from "@next-auth/supabase-adapter";
import { createClient } from "@supabase/supabase-js";

// 创建Supabase客户端
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface NextAuthOptionsExtended extends NextAuthOptions {
  adapter?: any;
}

export const authOptions: NextAuthOptionsExtended = {
  // Set any random key in .env.local
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      // Follow the "Login with Google" tutorial to get your credentials
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.given_name ? profile.given_name : profile.name,
          email: profile.email,
          image: profile.picture,
          createdAt: new Date(),
        };
      },
    }),
    // 移除EmailProvider，因为它需要MongoDB
    // EmailProvider({
    //   server: {
    //     host: "smtp.resend.com",
    //     port: 465,
    //     auth: {
    //       user: "resend",
    //       pass: process.env.RESEND_API_KEY,
    //     },
    //   },
    //   from: config.resend.fromNoReply,
    // }),
  ],
  // 使用Supabase适配器替代MongoDB适配器
  adapter: SupabaseAdapter(supabase),
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};

