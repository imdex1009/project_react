import React from 'react';

const nickname = dummyParticipant.map(el => {
  return el.nickname; /*dummyParticipant에서 닉네임 가져오기*/
})

return (
  <div className="participant">
    <div className="participant__nickname">{nickname}</div> /*블럭에 닉네임 입력*/
  </div>
)


// dummyData 만들어줘야 함
