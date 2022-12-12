import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase/config';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

import { useEffect } from 'react';
import HomeSkeleton from '../components/ui/home-skeleton';
import HeaderContextProvider from '../lib/context/header-context';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    console.log(!user?.displayName);
  }, [user]);

  if (loading) {
    return <HomeSkeleton />;
  }

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" />

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HeaderContextProvider>
        {getLayout(
          <>
            <Component {...pageProps} />
          </>
        )}
      </HeaderContextProvider>
    </>
  );
}

export default MyApp;
