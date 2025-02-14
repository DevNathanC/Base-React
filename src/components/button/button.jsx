import React from 'react';
import './button.css';

const sayHello = () => {
  console.log('Ola');
}

const Button = (props) => {
  return <button className='btn' onClick={sayHello}>{props.label}</button>
}

Button.defaultProps = {
  label: 'Botão padrão'
}

export default Button;