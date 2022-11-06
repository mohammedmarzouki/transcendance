import '../styles/globals.css'
import {ReactNode , ReactElement} from 'react'
import type { AppProps } from 'next/app'
import Bground from '../components/Bground'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Bground />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
