import React from 'react';
import './button.css';

const sayHello = () => {
  console.log('Ola');
}

const Button = ({label = 'Botão padrão'}) => {
  return <button className='btn' onClick={sayHello}>{label}</button>
}



export default Button;