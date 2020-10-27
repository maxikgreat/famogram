import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';
import { useEffect } from 'react';

import { stickyHeader } from '@/functions/stickyHeader';

// libraries css 
import 'animate.css';
import '@/styles/main.scss';


const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    //stickyHeader();
  }, [Component]);

  return (
    <>
      <NextNprogress
        color="#d1506a"
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
