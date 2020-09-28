import React from 'react';

import CharactorContainer from '~/containers/CharactorContainer';

import PageContainer from '~/components/page-container';
import Hero from '~/components/Hero';
import Form from '~/components/form';
import PreviewDownload from '~/components/PreviewDownload';

const IndexPage = () => (
  <PageContainer>
    <Hero />
    <CharactorContainer.Provider>
      <Form />
      <PreviewDownload />
    </CharactorContainer.Provider>
  </PageContainer>
);

export default IndexPage;
