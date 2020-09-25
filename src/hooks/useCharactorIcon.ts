import useImage from 'use-image';

import icons from '~/data/icons';
import { JobValues } from './useJob';
import { OriginValues } from './useOrigin';

export type IconKeys = keyof typeof icons;
export type IconValues = typeof icons[IconKeys];

const useCharactorIcon = (origin: OriginValues, job: JobValues) => {
  const filename = origin && job ? icons[`${origin}${job}`] : 'default.png';
  const [image] = useImage(`/icons/${filename}`);
  return image;
};

export default useCharactorIcon;
