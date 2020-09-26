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
    getSubJobKeys,
    selectSubJob,
    getPersonalityKeys,
    selectPersonality,
  } = CharactorContainer.useContainer();

  const onChangeOrigin = (value: OriginKeys) => selectOrigin(value);
  const onChangeJob = (value: JobKeys) => selectJob(value);
  const onChangeSubJob = (e: ChangeEventOfInput) =>
    selectSubJob(e.target.value as SubJobKeys);
  const onChangePersonality = (e: ChangeEventOfInput) =>
    selectPersonality(e.target.value as PersonalityKeys);

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
          selectedItem={getJobKey()}
          onChange={onChangeJob}
        />
      </ul>
      <h2>職業(前職)</h2>
      <ul>
        {getSubJobKeys().map(
          (subJob) =>
            (jobKey === null || jobKey !== subJob) && (
              <li key={subJob}>
                <label>
                  <input
                    type="radio"
                    name="subJob"
                    value={subJob}
                    onChange={onChangeSubJob}
                  />
                  {subJob}
                </label>
              </li>
            ),
        )}
      </ul>
      <h2>個性</h2>
      <ul>
        {getPersonalityKeys().map((personality) => (
          <li key={personality}>
            <label>
              <input
                type="radio"
                name="personality"
                value={personality}
                onChange={onChangePersonality}
              />
              {personality}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
