import { FC } from 'react';
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';

import '@/styles/main.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
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
