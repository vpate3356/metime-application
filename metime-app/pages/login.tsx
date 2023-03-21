import Head from 'next/head'
import Image from 'next/image'
import { Josefin_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'
import ApiCalendar from "react-google-calendar-api";

const inter = Josefin_Sans({ subsets: ['latin'] })

export default function Login() {
  const {data: session} = useSession();

  if (session) {
    return (
      <>
      <Head>
        <title>MeTime Web App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: 'flex', alignItems: 'center' }}>
  {session && session.user?.image && (
    <>
      <img src={session.user?.image} alt="Profile" style={{ borderRadius: '50%', marginLeft: '10px', marginTop: '5px', marginRight: '30px', width: '50px', height: '50px' }} />
      <p className={inter.className} style={{ fontSize: '24px', marginTop: '20px' }}>
        Welcome, {session.user?.name} to Your MeTime!
      </p>
    </>
  )}
</div>

      <main className={styles.main}>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/metimeman.svg"
          alt="Next.js Logo"
          width={500}
          height={500}
          priority
        />
      </div>


  <div className={styles.grid}>
    <a
      href="/metimeblock"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        MeTime Block  
      </h2>
      <p className={inter.className}>
        View available time in your calendar for MeTime.
      </p>
    </a>

    <a
      href="/placesclose"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        Suggested Activities
      </h2>
      <p className={inter.className}>
        View suggested activites nearby that correlate with your interests. 
      </p>
    </a>

    <a
      href="https://calendar.google.com/calendar/u/0/r"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        My Calendar 
      </h2>
      <p className={inter.className}>
        View your current schedule.&nbsp;
      </p>
    </a>

    <a
      href="/survey"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        Change your Interests
      </h2>
      <p className={inter.className}>
        Edit your location & interests here
      </p>
    </a>

    <a
      onClick={()=> signOut()}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        Log Out  
      </h2>
      <p className={inter.className}>
        Log out of your account!
      </p>
    </a>
  </div>
</main>
    </>
    );
  } else {
    return (
      <>
      <Head>
          <title>MeTime Web App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <p>You are not logged into MeTime</p>
          <button onClick={()=> signIn()} className={styles.button}>Sign In With Google</button>
        </div>
      </>
    );
  }
}