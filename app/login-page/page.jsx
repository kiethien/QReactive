"use client";
import styles from "./signin.module.css";
import React from 'react'
import  { useSession, signIn } from "next-auth/react"
import {useRouter} from "next/navigation"
import Link from "next/link";
import { faGooglePlusG, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
   <div className={styles.container} id={styles.container}>
  <div className={styles.formContainerSignIn}>
    <form>
      <h1 class="text-4xl font-bold dark:text-black">Sign In</h1>
      <div className={styles.socialIcons}>
        <div className={styles.icon} onClick={() => signIn("google")}>
              <FontAwesomeIcon icon={faGooglePlusG} />
            </div>
            <div className={styles.icon} onClick={() => signIn("github")}>
              <FontAwesomeIcon icon={faGithub} />
            </div>
      </div>
      <span>or use your email password</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>
       <p>Don't have an account? <Link href='/signup'>Create account</Link>  </p>

    </form>
  </div>
  <div className={styles.toggleContainer}>
    <div className={styles.toggle}>
      <div className={styles.togglePanelLeft}>
<h1 class="text-4xl font-bold dark:text-white">Welcome Back !</h1>
        <p>Enter your personal details to use all site features</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default LoginPage