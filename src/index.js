import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import InputComponent from './InputComponent';

ReactDOM.render(
  <React.StrictMode>
    <div className='showcase'>
    <InputComponent  label='<Input />' id='default'/>
    <InputComponent  label='&:hover' id='hover'/>
    <InputComponent  label='&:focus' id='focus'/>
    </div>
    <InputComponent label='<Input error />' className='error'/>
    <InputComponent placeholder='Disabled' label='<Input disabled /> ' disabled />
    <div className='showcase'>
      <InputComponent helperText='Some interesting text' label='<Input helperText="Some interesting text" />' />
      <InputComponent helperText='Some interesting text' className='error' label='<Input helperText="Some interesting text" />' />
    </div>
    <div className='showcase'>
      <InputComponent startIcon='call' />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
