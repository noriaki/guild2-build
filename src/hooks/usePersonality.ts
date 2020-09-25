import { useState } from 'react';

import personalities from '~/data/personalities';

export type PersonalityKeys = keyof typeof personalities;
export type PersonalityValues = typeof personalities[PersonalityKeys];

const usePersonality = (initialValue: PersonalityValues) => {
  const [personality, setPersonality] = useState<PersonalityValues>(
    initialValue,
  );

  const selectPersonality = (personalityKey: PersonalityKeys) => {
    const value = personalities[personalityKey];
    setPersonality(value);
    return value;
  };

  const getPersonalityKeys = () => Object.keys(personalities);

  return {
    personality,
    setPersonality,
    selectPersonality,
    getPersonalityKeys,
  };
};

export default usePersonality;
