import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Hardcoded credentials
        if (
          credentials.email === "admin@coach.io" &&
          credentials.password === "admin123"
        ) {
          return {
            id: "1",
            email: "admin@coach.io",
            name: "Admin",
          };
        }

        return null;
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
  ],
  session: {
    strategy: "jwt",
  },
  // pages: {
  //   signIn: "/auth/signin",
  // },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async signIn() {
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to /courses after successful login
      if (url === baseUrl || url === `${baseUrl}/`) {
        return `${baseUrl}/courses`;
      }
      // Allow relative callback URLs
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }
      // Allow callback URLs on the same origin
      if (new URL(url).origin === baseUrl) {
        return url;
      }
      return baseUrl;
    },
  },
};
