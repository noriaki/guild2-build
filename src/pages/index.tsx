import React from 'react';

import CharactorContainer from '~/containers/CharactorContainer';

import PageContainer from '~/components/page-container';
import Hero from '~/components/Hero';
import Canvas from '~/components/canvas';
import Output from '~/components/output';
import Form from '~/components/form';

const IndexPage = () => (
  <PageContainer>
    <Hero />
    <CharactorContainer.Provider>
      <Form />
      <Canvas />
      <Output />
    </CharactorContainer.Provider>
  </PageContainer>
);

export default IndexPage;
