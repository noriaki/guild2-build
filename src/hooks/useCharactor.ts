import useOrigin, { OriginValues } from './useOrigin';
import useJob, { JobValues } from './useJob';
import useSubJob, { SubJobValues } from './useSubJub';
import usePersonality, { PersonalityValues } from './usePersonality';

export type CharactorValues = {
  origin: OriginValues;
  job: JobValues;
  subJob: SubJobValues;
  personality: PersonalityValues;
};

const useCharactor = (initialValues?: CharactorValues) => {
  const origins = useOrigin(initialValues?.origin);
  const jobs = useJob(initialValues?.job);
  const subJobs = useSubJob(initialValues?.subJob);
  const personalities = usePersonality(initialValues?.personality);

  return {
    ...origins,
    ...jobs,
    ...subJobs,
    ...personalities,
  };
};

export default useCharactor;
