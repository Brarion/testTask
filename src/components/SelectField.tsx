import React from 'react';

import { IProps } from './interfaces/general';

export const SelectField: React.FC<IProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange(props.type, event.target.value);
  };

  return (
    <div className='form-item'>
      <label htmlFor={props.type} className={`label${props.required ? ' required' : ''}`}>
        Тип исполнителя
      </label>
      <select id={props.type} value={props.value} onChange={handleChange}>
        <option value='механик'>Механик</option>
        <option value='слесарь'>Слесарь</option>
        <option value='водитель'>Водитель</option>
      </select>
    </div>
  );
};
