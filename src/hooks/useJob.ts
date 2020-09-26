import { useState } from 'react';

import jobs from '~/data/jobs';

export type JobKeys = keyof typeof jobs;
export type JobValues = typeof jobs[JobKeys];

const useJob = (initialValue?: JobValues) => {
  const [job, setJob] = useState(initialValue);

  const selectJob = (jobKey: JobKeys) => {
    const value = jobs[jobKey];
    setJob(value);
    return value;
  };

  const getJobKeys = (): JobKeys[] => Object.keys(jobs);

  const getJobKey = (): JobKeys =>
    Object.entries(jobs).reduce(
      (ret: JobKeys | null, [key, value]: [JobKeys, JobValues]) => {
        if (job === value) {
          ret = key;
        }
        return ret;
      },
      null,
    );

  return {
    job,
    setJob,
    selectJob,
    getJobKey,
    getJobKeys,
  };
};

export default useJob;
