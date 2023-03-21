
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import ProfilePic from '../images/profilepic.png'
import VrajPFP from '../images/VrajPFP.JPG'
import EthanProfilePic from '../images/Ethan3.png'
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
            <h1><center> Our Team </center></h1>
            <div className={styles.ourTeam}>
                
                <div className={inter.member}>
                    <Image
                        src= {VrajPFP}
                        alt="profilepic.jpg"
                        width={250}
                        height={325}
                        priority
                    />
                    <h3>Vraj Patel</h3>
                    <p>vpate048@ucr.edu</p>
                    <p>CSBA</p>
                </div>

                <div className={inter.member}>
                    <Image
                        src= {'/chima.png'}
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
                        src= {EthanProfilePic}
                        alt="Brief Logo"
                        width={300}
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
