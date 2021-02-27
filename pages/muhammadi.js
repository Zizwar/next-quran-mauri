import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {

    const s =[];
    console.log(s?.a?.b)
    const allImagesQuranMohammadi = () =>
    Array.from({ length: 20 }).map((_, i) => <img key={`img${i}`} width="100"  src={`/muhammadi/page${i}.png`}/>
    )

    return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
         {allImagesQuranMohammadi()}
         </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
