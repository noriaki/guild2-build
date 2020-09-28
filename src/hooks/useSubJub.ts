import { useState } from 'react';

import jobs from '~/data/jobs';

const subJobs = {
  マスター: 'M',
  ...jobs,
} as const;

export type SubJobKeys = keyof typeof subJobs;
export type SubJobValues = typeof subJobs[SubJobKeys];

const useSubJob = (initialValue?: SubJobValues) => {
  const [subJob, setSubJob] = useState(initialValue);

  const selectSubJob = (subJobKey: SubJobKeys) => {
    const value = subJobs[subJobKey];
    setSubJob(value);
  };

  const getSubJobKeys = (): SubJobKeys[] =>
    Object.keys(subJobs) as SubJobKeys[];

  const getSubJobKey = (): SubJobKeys | null => {
    for (const [key, value] of Object.entries(subJobs) as [
      SubJobKeys,
      SubJobValues,
    ][]) {
      if (subJob === value) {
        return key;
      }
    }
    return null;
  };

  return {
    subJob,
    setSubJob,
    selectSubJob,
    getSubJobKey,
    getSubJobKeys,
  };
};

export default useSubJob;
