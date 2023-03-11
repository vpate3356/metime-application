import Head from 'next/head'
import Image from 'next/image'
import { Josefin_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

const inter = Josefin_Sans({ subsets: ['latin'] })

export default function Login() {
  const {data: session} = useSession();

  if (session) {
    return (
    <div>
      <p>Welcome, {session.user?.name} to MeTime!</p>
      <button onClick={()=> signOut()}>Sign Out</button>
    </div>
    );
  } else {
    return (
      <div>
        <p>You are not logged into MeTime</p>
        <button onClick={()=> signIn()}>Sign In With Google</button>
      </div>
    );
  }
}