import React, { FC } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import { trackPageview } from '~/libs/analytics';

Router.events.on('routeChangeComplete', (url) => trackPageview(url));

type FCwithProps = FC<{
  title?: string;
}>;

const PageContainer: FCwithProps = ({ title, children }) => (
  <div>
    <Head>
      <title>{title || 'ギルド物語2キャラクター画像ジェネレーター'}</title>
    </Head>
    {children}
  </div>
);

export default PageContainer;
