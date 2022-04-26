import Document, { Html, Head, Main, NextScript } from "next/document";
import { withRouter } from "next/router";

export default withRouter(
  class MyDocument extends Document {
    render() {
      return (
        <Html lang="es-MX">
          <Head></Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
);
