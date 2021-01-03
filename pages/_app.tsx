import { FC } from 'react';
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/main.scss';
import {SkeletonTheme} from 'react-loading-skeleton';


const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
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
      <SkeletonTheme color="#202020" highlightColor="#444">
        <Component {...pageProps} />
      </SkeletonTheme>
    </>
  );
}

export default App;
