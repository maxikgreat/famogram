import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="css/animation.css"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="js/bootstrap.bundle.min.js"></script>
          <script src="js/html5.min.js"></script>
          <script src="js/wow.min.js"></script>
          <script src="js/scripts.js"></script>
        </body>
      </Html>
    )
  }
}
