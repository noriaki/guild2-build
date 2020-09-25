import useImage from 'use-image';

import icons from '~/data/icons';
import { JobValues } from './useJob';
import { OriginValues } from './useOrigin';

export type IconKeys = keyof typeof icons;
export type IconValues = typeof icons[IconKeys];

const useCharactorIcon = (origin?: OriginValues, job?: JobValues) => {
  let filename: IconValues | 'default.png' = 'default.png';
  if (origin && job) {
    const key = `${origin}${job}` as IconKeys;
    filename = icons[key];
  }
  const [image] = useImage(`/icons/${filename}`);
  return image;
};

export default useCharactorIcon;
