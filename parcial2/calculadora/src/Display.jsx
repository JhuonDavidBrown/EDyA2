
import React from 'react';
import './Calculator.css'; 

export default function Display({ history, value }) {
  return (
    <div className="display">
      <div className="operation-history" style={{ fontSize: '14px', color: '#888' }}>
        {history} 
      </div>
      <div>
        {value} 
      </div>
    </div>
  );
}
