import Head from 'next/head'
import Link from 'next/Link'
import Bground  from '../components/Bground'
import Glass  from '../components/Glass'

const Home = () => {

  return (
    <>
      <Head> <title>transcendence</title></Head>
      <Bground />
      <Link href="/home">
        <button>
          <Glass img={undefined} label='kksjdsjip' />
        </button>
      </Link>
    </>
  )
}

export default Home
