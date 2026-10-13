import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectMongoDB from "./config/mongodb"; 
import User from "./src/app/models/UserSchema";    
import { authConfig } from "./auth.config";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
  ...authConfig,

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "String" },
        password: { label: "Password", type: "text" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

            try {
                await connectMongoDB();

                const user = await User.findOne({ email: credentials.email });
                if (!user) return null;

                const isMatch = await bcrypt.compare(String(credentials.password), user.password);

                if (isMatch) {
                    return {
                    id: user._id.toString(),
                    name: user.username,
                    email: user.email,
                    };
                } else {
                    console.log("Email or Password is not correct");
                    return null;
                } 
            } catch (error: any) {
                console.log("An error occurred: ", error);
                return null;
            }
        
        },
    }),
  ],

  pages: {
    signIn: "/signin",
  },
  secret: process.env.AUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = (user as any).id;
      return token;
    },

    async session({ session, token }) {
      // session.user = session.user;
      session.user.id = token.id as string;
      return session;
    },
  },
});
