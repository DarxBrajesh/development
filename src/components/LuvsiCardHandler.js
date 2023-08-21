// src/App.js
import React, { useState } from "react";
import LuvsiCard from "./LuvsiCard";
import Box from "@mui/material/Box";

const LuvsiCardHandler = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Card 1", content: "Content for Card 1" },
    { id: 2, title: "Card 2", content: "Content for Card 2" },
    { id: 3, title: "Card 3", content: "Content for Card 3" },
    { id: 4, title: "Card 4", content: "Content for Card 4" },
    // Add more cards here...
  ]);

  const handleSwipe = (direction) => {
    const newCards = [...cards];
    newCards.shift();
    const newCardId = cards.length + 1;
    newCards.push({
      id: newCardId,
      title: `Card ${newCardId}`,
      content: `Content for Card ${newCardId}`,
    });

    setCards(newCards);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background:'#ffd700',
      }}
    >
      {cards.map((card) => (
        <LuvsiCard
          key={card.id}
          title={card.title}
          content={card.content}
          onSwipe={handleSwipe}
        />
      ))}
    </Box>
  );
};

export default LuvsiCardHandler;
