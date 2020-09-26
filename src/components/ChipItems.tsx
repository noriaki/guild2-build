import React, { FC, MouseEvent } from 'react';

// material-ui
import Chip from '@material-ui/core/Chip';

// types
type Props = {
  items: string[];
  selectedItem?: string;
  onChange?: (v: string) => void;
};
type FCwithProps = FC<Props>;

type MouseEventOfLi = MouseEvent<HTMLLIElement>;

const ChipItems: FCwithProps = ({ items, selectedItem, onChange }) => {
  const onClick = (e: MouseEventOfLi) => onChange(e.target.innerText);

  return items.map((item) => (
    <Chip
      key={item}
      component="li"
      clickable
      label={item}
      variant={item === selectedItem ? 'default' : 'outlined'}
      color="primary"
      onClick={onClick}
    />
  ));
};

export default ChipItems;
