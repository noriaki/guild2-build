import React from 'react';

import CharactorContainer from '~/containers/CharactorContainer';

const Form = () => {
  const {
    getOriginKeys,
    selectOrigin,
    getJobKeys,
    selectJob,
  } = CharactorContainer.useContainer();
  const onChangeOrigin = (e) => selectOrigin(e.target.value);
  const onChangeJob = (e) => selectJob(e.target.value);

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
      <h2>職業</h2>
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
    </div>
  );
};

export default Form;
