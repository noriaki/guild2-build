import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

Router.events.on('routeChangeComplete', (url) => console.log(url));

const PageContainer = ({ title, children }) => (
  <div>
    <Head>
      <title>{title || 'ギルド物語2キャラクター画像ジェネレーター'}</title>
    </Head>
    {children}
  </div>
);

export default PageContainer;
