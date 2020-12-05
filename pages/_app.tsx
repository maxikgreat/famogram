import { FC } from 'react';
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '@/styles/components/_toast.scss';
import '@/styles/main.scss';

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
      <Component {...pageProps} />
    </>
  );
}

export default App;
