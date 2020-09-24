import React from 'react';

import CharactorContainer from '~/containers/CharactorContainer';

const Form = () => {
  const { getOriginKeys, selectOrigin } = CharactorContainer.useContainer();
  const onChange = (e) => selectOrigin(e.target.value);

  return (
    <div>
      {getOriginKeys().map((origin) => (
        <p key={origin}>
          <label>
            <input
              type="radio"
              name="origin"
              value={origin}
              onChange={onChange}
            />
            {origin}
          </label>
        </p>
      ))}
    </div>
  );
};

export default Form;
