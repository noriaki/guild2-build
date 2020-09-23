import React from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

import TextRect from './text-rect';

const Canvas = () => {
  const [image] = useImage('/icons/royalline.png');
  return (
    <Stage width={120} height={120}>
      <Layer>
        <Image image={image} />
        <TextRect x={2} y={12} text="人(男)" />
        <TextRect x={2} y={48} text="ロ(M)" />
        <TextRect x={2} y={84} text="エ" />
      </Layer>
    </Stage>
  );
};

export default Canvas;
