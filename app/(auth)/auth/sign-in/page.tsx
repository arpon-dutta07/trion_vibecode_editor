
import Image from 'next/image'
import React from 'react'

const SignInPage = () => {
  return (
    <>
        <Image src={"/login.svg"} alt="Login-Image" height={300} 
        width={300}
        className='m-6 object-cover'
        />
    </>
  )
}

export default SignInPage