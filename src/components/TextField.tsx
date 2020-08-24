import React from 'react';

import { IProps } from './interfaces/general';

export const TextField: React.FC<IProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(props.type, event.target.value);
  };

  return (
    <div className='form-item'>
      <label htmlFor={props.type} className={`label${props.required ? ' required' : ''}`}>
        {props.label}
      </label>
      <input type='text' id={props.type} value={props.value} onChange={handleChange} className={props.error ? 'error' : ''} />
    </div>
  );
};
