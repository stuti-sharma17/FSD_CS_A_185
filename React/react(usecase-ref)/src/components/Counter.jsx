// // src/components/Counter.jsx
import { useEffect, useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
useEffect(()=>{
    setCount1(count*5)
},[count])

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  
  return (
    <div>
      <h1>Counter App</h1>
      <h2>
      Counter1:{count}<br/>
      Counter2:{count1}<br/>
      </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;