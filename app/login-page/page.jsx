"use client";
import styles from "./signin.module.css";
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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  )
}

export default LoginPage