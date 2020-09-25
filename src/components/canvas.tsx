import React, { useRef } from 'react';
import { Stage, Layer, Image } from 'react-konva';

import useCharactorIcon from '~/hooks/useCharactorIcon';
import CharactorContainer from '~/containers/CharactorContainer';
import TextRect from './text-rect';

const Canvas = () => {
  const {
    origin,
    job,
    jobText,
    personality,
    getCharactorText,
  } = CharactorContainer.useContainer();
  const image = useCharactorIcon(origin, job);

  const ref = useRef(null);
  const onClickToImageDL = () => {
    const charText = getCharactorText();
    if (charText !== '') {
      const link = document.createElement('a');
      link.download = `冒ギル2-${charText}.png`;
      link.href = ref.current.toDataURL();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      <Stage width={120} height={120} ref={ref}>
        <Layer>
          <Image image={image} />
          {origin && <TextRect x={2} y={12} text={origin} />}
          {jobText && <TextRect x={2} y={48} text={jobText} />}
          {personality && <TextRect x={2} y={84} text={personality} />}
        </Layer>
      </Stage>
      <input type="button" value="画像DL" onClick={onClickToImageDL} />
    </div>
  );
};

export default Canvas;
