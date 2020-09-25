import React from 'react';

import CharactorContainer from '~/containers/CharactorContainer';

const Form = () => {
  const {
    getOriginKeys,
    selectOrigin,
    getJobKeys,
    selectJob,
    getSubJobKeys,
    selectSubJob,
    getPersonalityKeys,
    selectPersonality,
  } = CharactorContainer.useContainer();
  const onChangeOrigin = (e) => selectOrigin(e.target.value);
  const onChangeJob = (e) => selectJob(e.target.value);
  const onChangeSubJob = (e) => selectSubJob(e.target.value);
  const onChangePersonality = (e) => selectPersonality(e.target.value);

  return (
    <div>
      <h2>種族</h2>
      <ul>
        {getOriginKeys().map((origin) => (
          <li key={origin}>
            <label>
              <input
                type="radio"
                name="origin"
                value={origin}
                onChange={onChangeOrigin}
              />
              {origin}
            </label>
          </li>
        ))}
      </ul>
      <h2>職業(現職)</h2>
      <ul>
        {getJobKeys().map((job) => (
          <li key={job}>
            <label>
              <input
                type="radio"
                name="job"
                value={job}
                onChange={onChangeJob}
              />
              {job}
            </label>
          </li>
        ))}
      </ul>
      <h2>職業(前職)</h2>
      <ul>
        {getSubJobKeys().map((subJob) => (
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
        ))}
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
