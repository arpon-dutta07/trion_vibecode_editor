<<<<<<< HEAD
import SignInFormClient from '@/features/auth/components/signin-form-client'
=======

import SignInFromClient from '@/features/auth/components/signin-form-client'
>>>>>>> 388aac25194617ef73b2d3f990320c76c4ed33ac
import Image from 'next/image'
import React from 'react'

const SignInPage = () => {
  return (
    <>
      <div className='space-y-6 flex flex-col items-center justify-center'>
<<<<<<< HEAD
        <Image src={"/login.png"} alt="Login-Image" height={300} 
        width={300}
        className='m-6 object-cover'
        />
        <SignInFormClient/>
=======
        <Image src={"/logo.png"} alt="Login-Image" height={400} width={400}
        className='m-6 object-cover'
        />
        <SignInFromClient />
>>>>>>> 388aac25194617ef73b2d3f990320c76c4ed33ac
        </div>
    </>
  )
}

export default SignInPage

