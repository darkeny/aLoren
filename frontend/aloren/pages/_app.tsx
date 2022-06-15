import Head from 'next/head';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="stylesheet" href="http://localhost/public/css/bootstrap.min.css" />
        <script async src="http://localhost/public/js/bootstrap.min.js" />
        <script async src="http://localhost/public/js/form-validation.js" />
        <meta name='viewport' content='width=device-width' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default App;