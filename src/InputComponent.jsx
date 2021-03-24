import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './styles/index.css';

const InputComponent = ({domId, placeholder='Placeholder', className,disabled, label='Label', id, helperText, startIcon, endIcon, initialText, multiline, row}) => {

const [text, setText] = useState(initialText);

if (startIcon) {
  return (
    <div className={`inputComponent ${className} startIcon`} id={id}>
    <label className={`classicLabel ${className}`} htmlFor={domId}>
      {label}
      <span className='material-icons startIcon'>{startIcon}</span>
      <input 
        type='text'
        className={`classicInput startIcon ${className}`} 
        placeholder={placeholder} 
        disabled={disabled} 
        id={domId} 
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
      {helperText && <p>{helperText}</p>}
    </label>
  </div>
  )
}

if (endIcon) {
  return (
  <div className={`inputComponent ${className} endIcon`} id={id}>
    <label className={`classicLabel ${className}`} htmlFor={domId}>
      {label}
      <span className='material-icons endIcon'>{endIcon}</span>
      <input 
        type='text'
        className={`classicInput endIcon ${className}`} 
        placeholder={placeholder} 
        disabled={disabled} 
        id={domId} 
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
      {helperText && <p>{helperText}</p>}
    </label>
  </div>
  )
 }

if (multiline) { 
  return (
    <div className={`inputComponent ${className}`} id={id}>
    <label className={`classicLabel ${className}`} htmlFor={domId}>
      {label}
      <textarea 
        type='text'
        className={`classicTextArea ${className}`} 
        placeholder={placeholder} 
        disabled={disabled} 
        id={domId} 
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={row}
        />
      {helperText && <p>{helperText}</p>}
    </label>
  </div>
  )
} else {
    return (
  <div className={`inputComponent ${className}`} id={id}>
    <label className={`classicLabel ${className}`} htmlFor={domId}>
      {label}
      <input 
        type='text'
        className={`classicInput ${className}`} 
        placeholder={placeholder} 
        disabled={disabled} 
        id={domId} 
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
      {helperText && <p>{helperText}</p>}
    </label>
  </div>
);
}
}



export default InputComponent;