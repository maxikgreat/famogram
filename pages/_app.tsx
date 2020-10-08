import '@/vanilla/stickyHeader';
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';

import 'semantic-ui-css/semantic.min.css';
import '@/styles/main.scss';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNprogress
        color="#eb4ecb"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
