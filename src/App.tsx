import React from 'react';

import { RouteForm, IState } from './components/Form';

import './App.css'

const App: React.FC = () => {
  const getData = () : IState => {
    const localData = JSON.parse(localStorage.getItem('form') || '{}');

    return {
      title: localData.title ? localData.title : '',
      author: localData.author ? localData.author : '',
      type: localData.type ? localData.type : 'механик',
      days: localData.days ? localData.days : 'Пн',
      checkbox: localData.checkbox ? localData.checkbox : false,
    }

  }
  return (
    <main>
      <h1>Информация о маршруте</h1>
      <RouteForm value={getData()}/>
    </main>
  );
};

export default App;
