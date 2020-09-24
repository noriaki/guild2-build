import { useState } from 'react';

import origins from '~/data/origins';

export type OriginKeys = keyof typeof origins;
export type OriginValues = typeof origins[OriginKeys][number];

const useOrigin = (initialValue: OriginValues) => {
  const [origin, setOrigin] = useState<OriginValues>(initialValue);

  const selectOrigin = (originKey: OriginKeys) => {
    const values = origins[originKey];
    setOrigin(values[0]);
    return values;
  };

  const getOriginKeys = () => Object.keys(origins);

  return {
    origin,
    setOrigin,
    selectOrigin,
    getOriginKeys,
  };
};

export default useOrigin;
