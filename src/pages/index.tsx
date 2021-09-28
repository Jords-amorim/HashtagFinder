import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Search from '../components/search'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HashtagFinder</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Image src="/svg/logo.svg" alt="Vercel Logo" width={200} height={30} />
      <Search/>
    </div>
  )
}

export default Home
