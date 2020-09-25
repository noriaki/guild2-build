import React from 'react';

import CharactorContainer from '~/containers/CharactorContainer';

import PageContainer from '~/components/page-container';
import Canvas from '~/components/canvas';
import Output from '~/components/output';
import Form from '~/components/form';

const IndexPage = () => (
  <PageContainer>
    <CharactorContainer.Provider>
      <Canvas />
      <Output />
      <Form />
    </CharactorContainer.Provider>
  </PageContainer>
);

export default IndexPage;
