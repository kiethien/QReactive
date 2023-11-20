"use client";
import Button from '@/components/Button'
import React from 'react'
import  { useSession, signIn } from "next-auth/react"
import {useRouter} from "next/navigation"

const LoginPage = () => {
  const { data, status} = useSession();

  const router = useRouter();

  if (status === "loading"){
    return <div className=''>Loading...</div>;
  }

  if (status === "authenticated"){
    return <div className=''>Loading...</div>;
  }
  return (
    <div  onClick={()=>signIn("google") }>
      <Button
        type='button'
        title='Login'
        icon='/user.svg'
        variant='btn_dark_green'
      />
    </div>
  )
}

export default LoginPage