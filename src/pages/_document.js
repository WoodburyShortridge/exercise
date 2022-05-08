// @todo add next/react types
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class AxiosDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    // @todo fix display-name err
    // eslint-disable-next-line react/display-name
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
      <Head>
        <title>Axios Front End Excerise</title>
        {this.props.styleTags}
        <link
          rel="preload"
          href="https://static.axios.com/fonts/axios-site/nb_international_pro_book.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
