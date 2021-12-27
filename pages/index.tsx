import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Blessed Programmer</title>
        <meta
          name="description"
          content="Blessed Programmer is a Software Agency to give your Software perfect solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Welcome to Blessed Programmer.</h2>
    </div>
  );
}

export default Home
