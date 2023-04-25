import type { AppType } from 'next/app';
import Head from 'next/head';
import { ClerkProvider } from '@clerk/nextjs';
import { api } from '@/utils/api';

import '@/styles/main.scss';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Emoji Blog</title>
        <meta name="description" content="t3 emoji blog tutorial" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
