import React from 'react';

import CharactorContainer from '~/containers/CharactorContainer';

import PageContainer from '~/components/page-container';
import Canvas from '~/components/canvas';
import Output from '~/components/output';
import Form from '~/components/form';

const IndexPage = () => (
  <PageContainer>
    <h2>冒険者ギルド物語2 キャラクター画像ジェネレーター</h2>
    <p>
      種族・現職業・全職業・個性を選択すると画像がダウンロードできるほか、
      「吸忍(ロ)竜」などのテキストがコピーできるツールです。
    </p>
    <CharactorContainer.Provider>
      <Form />
      <Canvas />
      <Output />
    </CharactorContainer.Provider>
  </PageContainer>
);

export default IndexPage;
