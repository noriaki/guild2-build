import useOrigin, { OriginValues } from './useOrigin';
import useJob, { JobValues } from './useJob';

type CharactorValues =
  | {
      origin: OriginValues;
      job: JobValues;
    }
  | undefined;

const useCharactor = (initialValues: CharactorValues) => {
  const origins = useOrigin(initialValues?.origin);
  const jobs = useJob(initialValues?.job);

  return {
    ...origins,
    ...jobs,
  };
};

export default useCharactor;
