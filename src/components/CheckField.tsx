import React from 'react';

import { IProps } from './interfaces/general';

export const CheckField: React.FC<IProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(props.type, event.target.checked);
  };

  return (
    <div className='form-item checkbox'>
      <input type='checkbox' id={props.type} checked={props.checked} onChange={handleChange} />
      <label htmlFor={props.type}>
        {props.label}
      </label>
    </div>
  );
};
