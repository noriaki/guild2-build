import React, { ChangeEvent } from 'react';

import CharactorContainer from '~/containers/CharactorContainer';
import { JobKeys } from '~/hooks/useJob';
import { OriginKeys } from '~/hooks/useOrigin';
import { PersonalityKeys } from '~/hooks/usePersonality';
import { SubJobKeys } from '~/hooks/useSubJub';

// components
import ChipItems from './ChipItems';

// types
type ChangeEventOfInput = ChangeEvent<HTMLInputElement>;

const Form = () => {
  const {
    getOriginKey,
    getOriginKeys,
    selectOrigin,
    getJobKey,
    getJobKeys,
    selectJob,
    getSubJobKey,
    getSubJobKeys,
    selectSubJob,
    getPersonalityKey,
    getPersonalityKeys,
    selectPersonality,
  } = CharactorContainer.useContainer();

  const onChangeOrigin = (value: OriginKeys) => selectOrigin(value);
  const onChangeJob = (value: JobKeys) => selectJob(value);
  const onChangeSubJob = (value: SubJobKeys) => selectSubJob(value);
  const onChangePersonality = (value: PersonalityKeys) => selectPersonality(value);

  const jobKey = getJobKey();

  return (
    <div>
      <h2>種族</h2>
      <ul>
        <ChipItems
          items={getOriginKeys()}
          selectedItem={getOriginKey()}
          onChange={onChangeOrigin}
        />
      </ul>
      <h2>職業(現職)</h2>
      <ul>
        <ChipItems
          items={getJobKeys()}
          selectedItem={jobKey}
          onChange={onChangeJob}
        />
      </ul>
      <h2>職業(前職)</h2>
      <ul>
        <ChipItems
          items={getSubJobKeys()}
          selectedItem={getSubJobKey()}
          ignoredItem={jobKey}
          onChange={onChangeSubJob}
        />
      </ul>
      <h2>個性</h2>
      <ul>
        <ChipItems
          items={getPersonalityKeys()}
          selectedItem={getPersonalityKey()}
          onChange={onChangePersonality}
        />
      </ul>
    </div>
  );
};

export default Form;
