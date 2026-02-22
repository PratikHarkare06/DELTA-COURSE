import { useState, useEffect } from "react";

export default function Counterr() {
  let [countx, setCountx] = useState(0);

  let [county, setCounty] = useState(0);

  let incCountx = () => {
    setCountx((prevCount) => prevCount + 1);
  };

  let incCounty = () => {
    setCounty((prevCount) => prevCount + 1);
  };

  useEffect(
    function printSomething() {
      console.log("Component rendered");
    },
    [countx],
  );

  return (
    <div>
      <h3>Countx = {countx}</h3>
      <button onClick={incCountx}>Increase Count</button>
      <h3> County = {county}</h3>
      <button onClick={incCounty}>Increase Count</button>
    </div>
  );
}
