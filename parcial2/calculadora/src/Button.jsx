
import React from 'react';
import './Calculator.css'; 

export default function Button({ label, onClick, className = '' }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}
