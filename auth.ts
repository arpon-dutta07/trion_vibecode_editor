import NextAuth from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import {db} from "./lib/db";
import { getAccountByUserId, getUserById } from "./features/auth/actions"; // Import the getUserById function and getAccountByUserId function

export const {auth, handlers, signIn, signOut} = NextAuth({
callbacks:{

    async signIn({user , account , profile}){
        if(!user || !account)
            return false; // If there is no user or account, deny sign-in


        const existingUser = await db.user.findUnique({
            where:{email:user.email!}
        })// Check if a user with the same email already exists in the database

        if(!existingUser){
            const newUser= await db.user.create({
                data:{
                    email:user.email!,
                    name:user.name!,
                    image:user.image!,

                    accounts:{
                        create:{
                            type:account.type,
                            provider:account.provider,
                            providerAccountId:account.providerAccountId,
                            access_token:account.access_token,
                            expires_at:account.expires_at,
                            token_type:account.token_type,
                            scope:account.scope,
                            id_token:account.id_token,
                            session_state:account.session_state
                            
                        }// Create a new account record linked to the user
                    },
                },
            });// If the user does not exist, create a new user record in the database

            if(!newUser){
                return false; // If user creation fails, deny sign-in
            }
        }
        
        else {
            const existingAccount = await db.account.findUnique({
                where:{
                    provider_providerAccountId:{
                        provider:account.provider,
                        providerAccountId:account.providerAccountId
                    }
                }// Check if an account already exists for this user with the given credentials 
            })
            if(!existingAccount){
                await db.account.create({
                    data:{
                        userId:existingUser.id,
                        type:account.type,
                        provider:account.provider,
                        providerAccountId:account.providerAccountId,
                        access_token:account.access_token,
                        expires_at:account.expires_at,
                        token_type:account.token_type,
                        scope:account.scope,
                        id_token:account.id_token,
                        session_state:account.session_state
                    }
                });
            }// If an account doesn't exist for this user, create one account for them.
        }
        return true; // Allow sign-in if all checks pass
    },

    // This callback is invoked whenever a JSON Web Token is created (i.e., at sign-in).
    async jwt({token , user , account}){
        if(!token.sub) //sub is user id
            return token;
        const existingUser = await getUserById(token.sub);// Fetch the user from the database using the getUserById function

        if(!existingUser){
            return token; // If the user does not exist, return the token as is
        }

        const existingAccount = await getAccountByUserId(existingUser.id);// Fetch the account associated with the user using the getAccountByUserId function

        // You can add any account-related information to the token if needed
        token.name = existingUser.name;
        token.email = existingUser.email;
        token.role = existingUser.role;
        return token; // Return the modified token
    },

    async session({session , token}){
        if(token.sub && session.user){
            session.user.id = token.sub;
        }

        if(token.sub && session.user){
            session.user.role = token.role
        }

        return session;
    }
},
    secret:process.env.AUTH_SECRET, // Secret for signing the JWTs
    adapter:PrismaAdapter(db), // Use PrismaAdapter with the Prisma client instance
    session:{strategy:"jwt"}, // Use JWT strategy for sessions
    ...authConfig // Spread the authentication configuration
});

// In the above code, we have imported NextAuth and PrismaAdapter.
// We have also imported the authConfig from the auth.config.ts file.
// We then initialize NextAuth with the PrismaAdapter and the authConfig.
// The PrismaAdapter is passed the Prisma client instance (db).
// We also set the session strategy to "jwt" and provide a secret for signing the JWTs.