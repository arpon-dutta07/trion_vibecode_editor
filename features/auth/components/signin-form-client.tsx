<<<<<<< HEAD
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chrome, Github } from "lucide-react";
import { signIn } from "@/auth";

async function handleGoogleSignIn(){
"use server"
await signIn("google")
}

async function handleGithubSignIn(){
"use server"
await signIn("github")
}

const SignInFormClient = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Sign In
        </CardTitle>
        <CardDescription className="text-center">
          Choose your preferred sign-in method
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <form action={handleGoogleSignIn}>
          <Button type="submit" variant={"outline"} className="w-full">
            <Chrome className="mr-2 h-4 w-4" />
            <span>Sign in with google</span>
          </Button>
        </form>
        <form action={handleGithubSignIn}>
          <Button type="submit" variant={"outline"} className="w-full">
            <Github className="mr-2 h-4 w-4" />
            <span>Sign in with github</span>
          </Button>
        </form>
      </CardContent>

      <CardFooter>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 w-full">
          By signing in, you agree to our{" "}
          <a href="#" className="underline hover:text-primary">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-primary">
            Privacy Policy
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignInFormClient;
=======
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle } from '@/components/ui/card'

import { Chrome, 
    Github } from 'lucide-react'

const SignInFromClient = () => {
  return (
    <>
    <style>{`
      .gradient-border {
        position: relative;
        border-radius: 1rem;
        overflow: hidden;
        background: linear-gradient(135deg, #00fffb, #35a4fd, #6f56e5);
        padding: 2px;
      }
      
      .gradient-border-inner {
        position: relative;
        z-index: 2;
        border-radius: 0.95rem;
        background: linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(23, 23, 23, 0.9));
        backdrop-filter: blur(10px);
      }
    `}</style>
    <div className='gradient-border'>
      <div className='gradient-border-inner'>
        <Card className='w-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border-0 shadow-2xl'>
        
        {/* header section */}
        <CardHeader className="space-y-1">
            <CardTitle className="text-4xl font-bold text-center">
                Sign In
            </CardTitle>

            <CardDescription className="text-lg text-white text-center">
                Choose your preferred sign-in method
            </CardDescription>
        </CardHeader>

        {/* form section */}
        <CardContent className="grid gap-4">
            <form>
            <Button type="submit" variant={"outline"} className="w-full text-base h-12">
                <Chrome className="mr-2 h-5 w-5" />
                <span>Sign in with google</span>
            </Button>
            </form>
            <form >
            <Button type="submit" variant={"outline"} className="w-full text-base h-12">
                <Github className="mr-2 h-5 w-5" />
                <span>Sign in with github</span>
            </Button>
            </form>
        </CardContent>



        {/* footer section */}
        <CardFooter>
            <p className="text-base text-center text-white dark:text-gray-300 w-full">
            By signing in, you agree to our{" "}
            <a href="#" className="underline hover:text-primary text-white font-semibold">
                Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-primary font-semibold text-white">
                Privacy Policy
            </a>
            .
            </p>
        </CardFooter>

        
        </Card>
      </div>
    </div>
    </>
  )
}

export default SignInFromClient

>>>>>>> 388aac25194617ef73b2d3f990320c76c4ed33ac
