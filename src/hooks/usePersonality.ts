import { useState } from 'react';

import personalities from '~/data/personalities';

export type PersonalityKeys = keyof typeof personalities;
export type PersonalityValues = typeof personalities[PersonalityKeys];

const usePersonality = (initialValue?: PersonalityValues) => {
  const [personality, setPersonality] = useState(initialValue);

  const selectPersonality = (personalityKey: PersonalityKeys) => {
    const value = personalities[personalityKey];
    setPersonality(value);
    return value;
  };

  const getPersonalityKeys = () => Object.keys(personalities);

  const getPersonalityKey = (): PersonalityKeys | null => {
    for (const [key, value] of Object.entries(personalities) as [
      PersonalityKeys,
      PersonalityValues,
    ][]) {
      if (personality === value) {
        return key;
      }
    }
    return null;
  };

  return {
    personality,
    setPersonality,
    selectPersonality,
    getPersonalityKey,
    getPersonalityKeys,
  };
};

export default usePersonality;
