
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import ProfilePic from '../images/profilepic.png'
import { Josefin_Sans } from '@next/font/google'

const inter = Josefin_Sans({ subsets: ['latin'] })

export default function AboutUs() {
  return (
    <>
    <Head>
        <title>Meet Our Team </title>
      </Head>
      <main className={inter.main}>

        < div className={inter.wrapper}>
            <h1>Our Team</h1>
            <div className={styles.ourTeam}>
                
                <div className={inter.member}>
                    <Image
                        src= {ProfilePic}
                        alt="Brief Logo"
                        width={250}
                        height={325}
                        priority
                    />
                    <h3>Vraj</h3>
                    <p>vpate048@ucr.edu</p>
                </div>

                <div className={inter.member}>
                    <Image
                        src= {ProfilePic}
                        alt="Brief Logo"
                        width={250}
                        height={325}
                        priority
                    />
                    <h3>Chima</h3>
                    <p>kchim003@ucr.edu</p>
                </div>

                <div className={inter.member}>
                    <Image
                        src= {'/siraaj.png'}
                        width={250}
                        height={325}
                    />
                    <h3>Siraaj</h3>
                    <p>skudt001@ucr.edu</p>
                </div>

                <div className={inter.member}>
                    <Image
                        src= {ProfilePic}
                        alt="Brief Logo"
                        width={250}
                        height={325}
                        priority
                    />
                    <h3>Ethan </h3>
                    <p>ewan004@ucr.edu</p>
                </div>
            </div>
        </div>
      </main>
    </>
  )
}
