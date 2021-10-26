import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>DevCia - Comunidade de tecnologia</title>
        <meta name="description" content="Comunidade de tecnologia, Feita de pessoas para pessoas!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          <span>{'<'}</span>
          {'DevCia'}
          <span>{'/>'}</span>
        </h1>
        <p>
          Comunidade de tecnologia feita de <span>pessoas</span> para <span>pessoas</span>!
        </p>
      </main>
    </div>
  )
}
