import React from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

import CharactorContainer from '~/containers/CharactorContainer';
import TextRect from './text-rect';

const Canvas = () => {
  const [image] = useImage('/icons/royalline.png');
  const { origin, job } = CharactorContainer.useContainer();

  return (
    <Stage width={120} height={120}>
      <Layer>
        <Image image={image} />
        {origin && <TextRect x={2} y={12} text={origin} />}
        {job && <TextRect x={2} y={48} text={job} />}
        <TextRect x={2} y={84} text="エ" />
      </Layer>
    </Stage>
  );
};

export default Canvas;
