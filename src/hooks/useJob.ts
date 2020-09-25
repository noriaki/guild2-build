import { useState } from 'react';

import jobs from '~/data/jobs';

export type JobKeys = keyof typeof jobs;
export type JobValues = typeof jobs[JobKeys];

const useJob = (initialValue: JobValues) => {
  const [job, setJob] = useState<JobValues>(initialValue);

  const selectJob = (jobKey: JobKeys) => {
    const value = jobs[jobKey];
    setJob(value);
    return value;
  };

  const getJobKeys = () => Object.keys(jobs);

  return {
    job,
    setJob,
    selectJob,
    getJobKeys,
  };
};

export default useJob;
