import { createContainer } from 'unstated-next';

import useCharactorOriginal, { CharactorValues } from '~/hooks/useCharactor';

const useCharactor = (initialValues?: CharactorValues) => {
  const chars = useCharactorOriginal(initialValues);
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
