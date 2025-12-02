import NextAuth from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import authConfig from "./auth.config";


export const {auth, handlers, signIn, signOut} = NextAuth({
    callbacks:{

    
    },
    secret:process.env.AUTH_SECRET,
    adapter:PrismaAdapter(db),
    session:{strategy:"jwt"},
    ...authConfig
});
