import { createContainer } from 'unstated-next';

import useCharactorOriginal from '~/hooks/useCharactor';

const useCharactor = (...args) => {
  const chars = useCharactorOriginal(...args);
  const { origin, job, subJob, personality } = chars;

  let jobText: string | null = null;

  if (job != null) {
    if (subJob != null) {
      jobText = subJob === 'M' ? `${job}${subJob}` : `${job}(${subJob})`;
    } else {
      jobText = job;
    }
  }

  const getCharactorText = (): string => {
    if (origin && jobText && personality) {
      return `${origin}${jobText}${personality}`;
    }
    return '';
  };

  return { ...chars, jobText, getCharactorText };
};

const CharactorContainer = createContainer(useCharactor);

export default CharactorContainer;
