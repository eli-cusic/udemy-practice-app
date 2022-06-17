import React, { useState } from 'react';
import "./BradyFactory.css";

const BradyFactory = (props) => {
  const [bradyCount, setBradyCount] = useState(0);
  const [displayError, setDisplayError] = useState(false);

  const increment = () => {
    setDisplayError(false);
    // This can cause issues... use the "function form" to use previous state
    // setBradyCount(bradyCount - 1);
    setBradyCount((prevBradyCount) => {
      return prevBradyCount + 1;
    });
  }

  const decrement = () => {
    if (bradyCount <= 0) {
      setDisplayError(true)
      return
    }
    setBradyCount((prevBradyCount) => {
      return prevBradyCount - 1;
    });
  };

  const Error = () => {
    return (
      <p className="error">A Brady must exist in order to be destroyed.</p>
    );
  }

  return (
    <div>
      <h1>&#127981; Brady Factory &#127981;</h1>
      <p>Current number of Bradys: {bradyCount}</p>
      <button className="clone" onClick={increment}>Clone Brady :)</button>
      <button className="destroy" onClick={decrement}>Destroy Brady :(</button>
      { displayError ? <Error /> : null }
      <p className="emojis">{"🕺".repeat(bradyCount)}</p>
    </div>
  );
};

export default BradyFactory;
