import Document, { Html, Head, Main, NextScript } from 'next/document'
import Bground  from '../components/Bground'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Peta:wght@700&family=Nanum+Gothic+Coding&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument