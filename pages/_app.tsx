import { ExoticComponent, FC, Fragment, ReactNode } from 'react';
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';

import { wrapper } from '@/store';
import '@/styles/main.scss';
import { NextComponentType } from 'next';

type ComponentWithLayout = NextComponentType &  { Layout: ExoticComponent };

interface ExtendedAppProps extends AppProps {
  Component: ComponentWithLayout
}

const ReduxApp: FC<ExtendedAppProps> = ({ Component, pageProps }) => {
  const Layout = Component.Layout ? Component.Layout : Fragment;
  return (
    <>
      <NextNprogress
        color="#ca2c4c"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        options={{ showSpinner: false }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(ReduxApp);
