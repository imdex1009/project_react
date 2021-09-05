import React from 'react';

const GamePage = () => {
  
  return (
    <div id="gamePage__container">
      <div id="gamePage__wrapper">
        <div id="round"> 
        {/* 게임 끝나면 round 올려주기 */}
        </div>
        <div id="score"> 
        {/* 게임 결과에 따라 점수 변동 */}
        </div>
        <section id="boardGame">
          <div id="participants"> 
            <div className="participant"></div> 
            {/* 참가자마다의 컴포넌트  */}
          </div>
          <div id="tagger"></div> 
          {/* 술래 */}
          <div id="card"></div> 
          {/* 단어가 들어가있는 13개의 카드, 선택 가능하도록  */}
        </section>
        <div>
          <input id="hintOrAnswer"></input> 
          {/* 힌트 또는 답 입력하기  */}
        </div>
        <div id="timeLimit"> 
        {/* 시간제한  */}
        </div>
        <div id="chatting">
          <textarea id="chattingDisplay"></textarea> 
          {/* 채팅 내용 보여지는 부분  */}
          <input id="chattingInput"></input> 
          {/* 채팅 입력하는 칸  */}
        </div>
      </div>
    </div>
  );
};

export default GamePage
