import { useState } from 'react';

import origins from '~/data/origins';

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
    for (const [key, values] of Object.entries(origins) as [
      OriginKeys,
      OriginValues[],
    ][]) {
      if (origin === values[0]) {
        return key;
      }
    }
    return null;
  };

  return {
    origin,
    setOrigin,
    selectOrigin,
    getOriginKey,
    getOriginKeys,
  };
};

export default useOrigin;
