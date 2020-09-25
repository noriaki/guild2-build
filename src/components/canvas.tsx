import React from 'react';
import { Stage, Layer, Image } from 'react-konva';

import useCharactorIcon from '~/hooks/useCharactorIcon';
import CharactorContainer from '~/containers/CharactorContainer';
import TextRect from './text-rect';

const Canvas = () => {
  const { origin, job, personality } = CharactorContainer.useContainer();
  const image = useCharactorIcon(origin, job);

  return (
    <Stage width={120} height={120}>
      <Layer>
        <Image image={image} />
        {origin && <TextRect x={2} y={12} text={origin} />}
        {job && <TextRect x={2} y={48} text={job} />}
        {personality && <TextRect x={2} y={84} text={personality} />}
      </Layer>
    </Stage>
  );
};

export default Canvas;
