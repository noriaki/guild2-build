import React, { FC } from 'react';
import { Rect, Text } from 'react-konva';
import Konva from 'konva';

type Props = {
  text: string;
  x: number;
  y: number;
};
type FCwithProps = FC<Props>;

const borderWidth = 3;
const cornerRadius = 5;
const fontSize = 20;
const marginTop = 9;
const marginLeft = 8;

const TextRect: FCwithProps = ({ text, x, y }) => {
  const width = new Konva.Text({ text, fontSize }).width();
  return (
    <>
      <Rect
        x={x}
        y={y}
        width={width + marginLeft * 2}
        height={35}
        fill="white"
        stroke="black"
        strokeWidth={borderWidth}
        cornerRadius={cornerRadius}
      />
      <Text
        x={x + marginLeft}
        y={y + marginTop}
        text={text}
        fontSize={fontSize}
      />
    </>
  );
};

export default TextRect;
