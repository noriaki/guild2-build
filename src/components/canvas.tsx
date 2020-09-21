import React from 'react';
import { Stage, Layer, Text, Image } from 'react-konva';

const Canvas = () => (
  <Stage width={120} height={120}>
    <Layer>
      <Text text="吸" fronSize={15} />
    </Layer>
  </Stage>
);

export default Canvas;
