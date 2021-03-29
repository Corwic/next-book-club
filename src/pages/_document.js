import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
/*  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }*/

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
