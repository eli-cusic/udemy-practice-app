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
      <button className="clone" onClick={increment}>Clone Brady :)</button>
      <button className="destroy" onClick={decrement}>Destroy Brady :(</button>
      { displayError ? <Error /> : null }
      <h1 className="emojis">{"\uD83D\uDE00".repeat(bradyCount)}</h1>
    </div>
  );
};

export default BradyCounter;
