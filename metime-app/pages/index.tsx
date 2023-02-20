import Head from 'next/head'
import Image from 'next/image'
import { Josefin_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Josefin_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MeTime Web App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <div className={styles.description}> */}
          <p>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </div>
        {/* </div> */}

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/MeTime Logo.svg"
            alt="Next.js Logo"
            width={500}
            height={500}
            priority
          />
          {/* <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div> */}
        </div>

        <div className={styles.grid}>
          <a
            href="https://calendar.google.com/calendar/u/0/r"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About Us 
            </h2>
            <p className={inter.className}>
              Learn more about our company values and history.
            </p>
          </a>

          <a
            href="https://calendar.google.com/calendar/u/0/r"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              My Google Calendar 
            </h2>
            <p className={inter.className}>
              Here is your current schedule.&nbsp;
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Create Account 
            </h2>
            <p className={inter.className}>
              Join the MeTime commmunity by clicking here!&nbsp;
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Log In 
            </h2>
            <p className={inter.className}>
              If you are already an existing user, click here to see your MeTime activities!
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
