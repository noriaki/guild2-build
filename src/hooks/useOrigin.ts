import { useState } from 'react';

import origins, { originIcons } from '~/data/origins';

export type OriginKeys = keyof typeof origins;
export type OriginValues = typeof origins[OriginKeys][number];

const useOrigin = (initialValue?: OriginValues) => {
  const [origin, setOrigin] = useState(initialValue);

  const selectOrigin = (originKey: OriginKeys) => {
    const values = origins[originKey];
    setOrigin(values[0]);
  };

  const getOriginKeys = (): OriginKeys[] =>
    Object.keys(origins) as OriginKeys[];

  const getOriginKey = (): OriginKeys | null => {
    const originKeys = Object.keys(origins) as OriginKeys[];
    for (const key of originKeys) {
      if (origins[key][0] === origin) {
        return key;
      }
    }
    return null;
  };

  const getOriginIcon = (key: OriginKeys) => originIcons[key];

  return {
    origin,
    setOrigin,
    selectOrigin,
    getOriginKey,
    getOriginKeys,
    getOriginIcon,
  };
};

export default useOrigin;
