import React from 'react';
import './styles/index.css';

const InputComponent = ({domId, placeholder='Placeholder', className,disabled, label='Label', id, helperText, startIcon}) => (
  <div className={`inputComponent ${className}`} id={id}>
    <label className={`classicLabel ${className}`} htmlFor={domId}>{label}
      <input 
        className={`classicInput ${className}`} 
        placeholder={placeholder} 
        disabled={disabled} 
        id={domId} 
        />
      {helperText && <p>{helperText}</p>}
    </label>
  </div>
);

export default InputComponent;