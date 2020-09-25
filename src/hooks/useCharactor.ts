import useOrigin, { OriginValues } from './useOrigin';
import useJob, { JobValues } from './useJob';
import usePersonality, { PersonalityValues } from './usePersonality';

type CharactorValues =
  | {
      origin: OriginValues;
      job: JobValues;
      personality: PersonalityValues;
    }
  | undefined;

const useCharactor = (initialValues: CharactorValues) => {
  const origins = useOrigin(initialValues?.origin);
  const jobs = useJob(initialValues?.job);
  const personalities = usePersonality(initialValues?.personality);

  return {
    ...origins,
    ...jobs,
    ...personalities,
  };
};

export default useCharactor;
