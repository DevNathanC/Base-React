import React from 'react';
import './card.css';

const Card = ({children, color}) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  color:'orange'
}

export default Card;