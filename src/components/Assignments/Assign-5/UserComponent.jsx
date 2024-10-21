import React, { useState } from 'react';
import Users from './Users';

function App() {
  const [counter, setCounter] = useState(10);

  const handleIncrement = () => {
    setCounter(counter + 1); 
  };

  return (
    <div className="App">
      <Users counter={counter} handleIncrement={handleIncrement} />
    </div>
  );
}

export default App;
