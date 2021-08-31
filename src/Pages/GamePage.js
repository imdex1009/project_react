import React from 'react';

const GamePage = () => {
  
  return (
    <div className="gamePage__container">
      <div className="gamePage__wrapper">
        <div className="round">
        </div>
        <div className="score">
        </div>
        <div className="boardGame">
          
        </div>
        <div>
          <input className="hintOrAnswer"
          ></input>
        </div>
        <div className="timeLimit">
        </div>
        <div>
          <textarea className="chattingDisplay"
          ></textarea>
          <input className="chattingInput"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default GamePage