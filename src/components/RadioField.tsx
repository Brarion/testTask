import React from 'react';

import { IProps } from './interfaces/general';

export const RadioField: React.FC<IProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(props.type, event.target.value);
  };

  return (
    <>
      <label
        htmlFor={props.type}
        className={`label${props.required ? ' required' : ''}`}
      >
        {props.label}
      </label>
      <div id={props.type} className='days'>
        <div className='btn'>
          <input
            type='radio'
            id={`${props.type}1`}
            name={props.type}
            value='Пн'
            checked={props.value === 'Пн'}
            onChange={handleChange}
          />
          <label htmlFor={`${props.type}1`}>Пн</label>
        </div>

        <div className='btn'>
          <input
            type='radio'
            id={`${props.type}2`}
            name={props.type}
            value='Вт'
            checked={props.value === 'Вт'}
            onChange={handleChange}
          />
          <label htmlFor={`${props.type}2`}>Вт</label>
        </div>

        <div className='btn'>
          <input
            type='radio'
            id={`${props.type}3`}
            name={props.type}
            value='Ср'
            checked={props.value === 'Ср'}
            onChange={handleChange}
          />
          <label htmlFor={`${props.type}3`}>Ср</label>
        </div>

        <div className='btn'>
          <input
            type='radio'
            id={`${props.type}4`}
            name={props.type}
            value='Чт'
            checked={props.value === 'Чт'}
            onChange={handleChange}
          />
          <label htmlFor={`${props.type}4`}>Чт</label>
        </div>

        <div className='btn'>
          <input
            type='radio'
            id={`${props.type}5`}
            name={props.type}
            value='Пт'
            checked={props.value === 'Пт'}
            onChange={handleChange}
          />
          <label htmlFor={`${props.type}5`}>Пт</label>
        </div>

        <div className='btn'>
          <input
            type='radio'
            id={`${props.type}6`}
            name={props.type}
            value='Сб'
            checked={props.value === 'Сб'}
            onChange={handleChange}
          />
          <label htmlFor={`${props.type}6`}>Сб</label>
        </div>

        <div className='btn'>
          <input
            type='radio'
            id={`${props.type}7`}
            name={props.type}
            value='Вс'
            checked={props.value === 'Вс'}
            onChange={handleChange}
          />
          <label htmlFor={`${props.type}7`}>Вс</label>
        </div>
      </div>
    </>
  );
};
