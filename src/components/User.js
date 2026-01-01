import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(1);

  const { name } = props;
  return (
    <div className="user-card">
      <h1>Name: {name}</h1>
      <h2>Address: Pune</h2>
      <h2>Contact: jrohinib</h2>
      <h2>Count: {count}</h2>
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          setCounter(counter + 1);
        }}
      >
        Increment!!
      </button>
    </div>
  );
};

export default User;
