import React, {useState}from 'react';
import Header from './Header';

const Practice = () => {
    const [count, setCount] = useState(0);
    const Increment = () => {
        setCount(count + 1);
    }
   
  return (
    <div>
      <Header/>
      <h1>Count</h1>
      <h4>The Count is :{count}</h4>
      <button onClick={Increment}>Increment</button><span>  </span>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Practice;