import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = () => {
  const [add2, setAdd] = useState(0);

  const plus = () => {
    setAdd(add2 + 2);
  };

  return (
    <button className='addbtn' onClick={plus}>{add2} </button>
    
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

