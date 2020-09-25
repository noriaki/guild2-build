import React from 'react';

import CharactorContainer from '~/containers/CharactorContainer';

const Output = () => {
  const { getCharactorText } = CharactorContainer.useContainer();
  const charText = getCharactorText();

  const onClickToCopy = () => {
    if (charText !== '') {
      navigator.clipboard.writeText(charText).then(
        () => {
          console.log(`copy "${charText}"`);
        },
        () => {
          console.log('copy fail');
        },
      );
    }
  };

  return (
    <div>
      <input type="text" value={charText} readOnly />
      <input type="button" value="コピー" onClick={onClickToCopy} />
    </div>
  );
};

export default Output;
