import Head from 'next/head'
import Image from 'next/image'
import { Josefin_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Josefin_Sans({ subsets: ['latin'] })

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About MeTime</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={inter.className}>
              About MeTime
            </h1>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/Group.svg"
            alt="Next.js Logo"
            width={400}
            height={400}
            priority
          />
        </div>

        <div className={styles.griddy}>
          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              The Problem 
            </h2>
            <p className={inter.className}>
            A rising problem in United States currently is stress and burnout, and has grown especially throughout the pandemic. </p>
<p className={inter.className}>“79% of employees had experienced work-related stress… Nearly 3 in 5 employees reported negative impacts of <strong>work-related stress, </strong>including <strong>lack of interest, </strong> motivation, or <strong> energy, </strong>and <strong>lack of effort </strong>at work.”<sup>1</sup></p>
<p className={inter.className}>“Among all respondents, 80% believe <strong>COVID-19 has impacted workplace burnout.”</strong><sup>2</sup></p>
<p className={inter.className}>In addition to this we found that another issue that is arising is work life balance and finding time to find new interests and hobbies. </p>
<p className={inter.className}>“Mental health benefits of hobbies: <strong>Reduced stress, </strong>enhanced well-being, improved social connection, <strong>decreases in depression and anxiety, </strong>and <strong>improved mental health.”</strong><sup>3</sup> </p>
<p>Source(s): (APA 2021, Work and Well-being Survey of 1,501 U.S. adult workers)<sup>1</sup> | (Forbes, 2021)<sup>2</sup> | (Utah State University, 2021)<sup>3</sup>
            </p>
          </a>

          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              The Solution
            </h2>
            <p className={inter.className}>
            The MeTime application will allow users to <strong>better organize free time</strong> and <strong>explore new interests. </strong> 
The user is able to <i>import their digital calendar </i>and the city they are located in.
The user will also be able to go through an <i>onboarding survey </i>where they can select their interests and activities. 
A <strong>MeTime block </strong>will appear when the user has free time for a 30 minute to 1 hour block and <i>suggest nearby activities </i>corresponding with their interests.&nbsp;
            </p>
          </a>

          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Our Values 
            </h2>
            <p className={inter.className}>
              We understand that it is important for all of us to solve this problem. As college students, we try to achieve this <strong>work-life balance </strong>on a daily basis from trying to make friends, <strong>spend time on our hobbies,</strong> and do well in school.
We have talked about each others interests and how we <strong>dont feel like we have enough time in the day. </strong>
This is an issue we deal with on an everyday basis along with <i>millions </i>of other people in America. So we would love to make a <em>difference </em>and help combat this problem!  
            </p>
          </a>

          
        </div>
      </main>
    </>
  )
}
