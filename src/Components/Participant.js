import React from "react";
import dummyParticipants from "../static/dummyParticipants";

const Participant = () => {
  const block = dummyParticipants.map((el) => {
    return <div className="participant__username">{el.username}</div>;
  });

  return <div className="participant">{block}</div>;
};

// dummyData 만들어줘야 함
export default Participant;
