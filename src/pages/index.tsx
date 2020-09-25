import React from 'react';

import CharactorContainer from '~/containers/CharactorContainer';

import PageContainer from '~/components/page-container';
import Canvas from '~/components/canvas';
import Form from '~/components/form';

const IndexPage = () => (
  <PageContainer>
    <CharactorContainer.Provider>
      <Canvas />
      <Form />
    </CharactorContainer.Provider>
  </PageContainer>
);

export default IndexPage;
