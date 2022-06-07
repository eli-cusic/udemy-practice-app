import React, { useState } from 'react';
import "./BradyCounter.css";

const BradyCounter = (props) => {
  const [bradyCount, setBradyCount] = useState(0);
  const [displayError, setDisplayError] = useState(false);

  const increment = () => {
    setDisplayError(false);
    setBradyCount(bradyCount + 1);
  }

  const decrement = () => {
    if (bradyCount <= 0) {
      setDisplayError(true)
      return
    }
    setBradyCount(bradyCount - 1);
  };

  const Error = () => {
    return (
      <p className="error">A Brady must exist in order to be destroyed.</p>
    );
  }

  return (
    <div>
      <p>Current number of Bradys: {bradyCount}</p>
      <button onClick={increment}>Clone Brady :)</button>
      <button onClick={decrement}>Destroy Brady :(</button>
      { displayError ? <Error /> : null }
    </div>
  );
};

export default BradyCounter;
