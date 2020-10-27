import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
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
