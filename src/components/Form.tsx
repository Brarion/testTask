import React, { useState } from 'react';

import { TextField } from './TextField';
import { SelectField } from './SelectField';
import { RadioField } from './RadioField';
import { CheckField } from './CheckField';

export interface IState {
  title: string;
  author: string;
  type: string;
  days: string;
  checkbox: boolean;
}

type TProps = {
  value: IState;
}

export const RouteForm: React.FC<TProps> = (props) => {
  const [data, setData] = useState<IState>({
    title: props.value.title,
    author: props.value.author,
    type: props.value.type,
    days: props.value.days,
    checkbox: props.value.checkbox,
  });

  const handleChange = (property: string, value: string | boolean) => {
    setData((values) => ({ ...values, [property]: value }));
  };

  const isValidated = () => {
    if (!data.checkbox) return false;
    else {
      return !(
        data.title.length > 0 &&
        data.author.length > 0 &&
        data.author.match(/[0-9]/g) === null
      );
    }
  };

  const handleSubmit = () => {
    localStorage.setItem('form', JSON.stringify(data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Наименование'
        type='title'
        value={data.title}
        onChange={handleChange}
        required={data.checkbox}
        error={data.checkbox && !data.title.length}
      />
      <TextField
        label='Автор маршрута'
        type='author'
        value={data.author}
        onChange={handleChange}
        required={data.checkbox}
        error={data.checkbox && (!data.author.length || data.author.match(/[0-9]/g) !== null)}
      />

      <SelectField
        label='Тип исполнителя'
        type='type'
        value={data.type}
        onChange={handleChange}
        required={data.checkbox}
      />

      <div className='btns'>
        <RadioField
          label='Дни обходов'
          type='days'
          value={data.days}
          onChange={handleChange}
          required={data.checkbox}
        />

        <CheckField
          label='Длительный обход'
          type='checkbox'
          checked={data.checkbox}
          onChange={handleChange}
        />
      </div>

      <button type='submit' disabled={isValidated()}>Сохранить</button>
    </form>
  );
};
