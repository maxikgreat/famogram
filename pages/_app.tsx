import { FC } from 'react';
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '@/styles/main.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>
      <ToastContainer
        draggable
        pauseOnHover
        pauseOnFocusLoss
        closeOnClick
        newestOnTop={false}
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        rtl={false}
        children
      />
      <NextNprogress
        color="#ca2c4c"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
