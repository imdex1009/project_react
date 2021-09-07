import React, { useState } from "react";
import dummyCard from "../static/dummyCard";

const Card = () => {
  const [cardList, setCardList] = useState(dummyCard);
  const [currentCard, setCurrentCard] = useState("");

  return <div className="participant">{block}</div>;
};

// dummyData 만들어줘야 함
export default Card;
