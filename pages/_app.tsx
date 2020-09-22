import type { AppProps } from 'next/app'

import 'semantic-ui-css/semantic.min.css';
import '@/styles/main.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App;
