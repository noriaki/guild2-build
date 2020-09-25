import { useState } from 'react';

import jobs from '~/data/jobs';

const subJobs = {
  マスター: 'M',
  ...jobs,
} as const;

export type SubJobKeys = keyof typeof subJobs;
export type SubJobValues = typeof subJobs[SubJobKeys];

const useSubJob = (initialValue?: SubJobValues) => {
  const [subJob, setSubJob] = useState<SubJobValues>(initialValue);

  const selectSubJob = (subJobKey: SubJobKeys) => {
    const value = subJobs[subJobKey];
    setSubJob(value);
    return value;
  };

  const getSubJobKeys = () => Object.keys(subJobs);

  return {
    subJob,
    setSubJob,
    selectSubJob,
    getSubJobKeys,
  };
};

export default useSubJob;
