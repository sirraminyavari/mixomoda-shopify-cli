import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {
    fetch("../../api/store_pair")
      .then(res => res.json())
      .then(res => console.log(res, "ramin"));
  }, []);

  useEffect(() => {
    fetch("../../api/products")
      .then(res => res.json())
      .then(res => console.log(res, "ramin"));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="ShopifyCLI test project for MixoModa" />
        <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5ee6be593dc49f4def5d0ef1/77e165c4-6286-4a57-9033-51eb38e95697/favicon.ico?format=100w"/>
      </Head>

      <main className={styles.main}>
        <img 
          src="https://images.squarespace-cdn.com/content/v1/5ee6be593dc49f4def5d0ef1/5c7f6499-aca2-4472-b525-2dfb9d224006/logo-black.png?format=1500w"
          style={{width: "10rem"}}
        ></img>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}