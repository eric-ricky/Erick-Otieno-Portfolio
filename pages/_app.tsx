import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

import HeaderContextProvider from '../lib/context/header-context';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  // const [user, loading] = useAuthState(auth);

  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
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
