import { useState } from "react"; //useState from 'react'
function init() {
  console.log("init called");
  return Math.random();
}
export default function Counter() {
  const [count, setCount] = useState(init); //Intialisation
  console.log("Component re rendered");

  let incCount = () => {
    setCount((currCount) => {
      // Functional update form of setCount with callback function
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
    // setCount(25); // Directly setting count to 25, ignoring the previous state without using the functional update form. Callback function is not required
  };
  // function incCount() {
  // setCount(count + 1);
  // console.log(`inside incCount count =${count}`);
  // console.log(count);

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
