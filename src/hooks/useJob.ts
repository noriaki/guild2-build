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

  const getJobKeys = (): JobKeys[] => Object.keys(jobs) as JobKeys[];

  const getJobKey = (): JobKeys | null => {
    for (const [key, value] of Object.entries(jobs) as [JobKeys, JobValues][]) {
      if (job === value) {
        return key;
      }
    }
    return null;
  };

  return {
    job,
    setJob,
    selectJob,
    getJobKey,
    getJobKeys,
  };
};

export default useJob;
