import { Box, Stack } from "@mui/material";
import React from "react";

interface ICard {
  player?: number;
  data: string[];
}
const Card: React.FC<ICard> = ({ player, data }) => {
  return (
    <Stack
      spacing={1}
      direction="row"
      width={80}
      height={112}
      position="absolute"
      top={0}
      left="50%"
      sx={{
        transform: `translate(-120%, ${player === 3 ? "100%" : "-120% "});`,
      }}
    >
      {data.map((item) => (
        
          <img
            src={`image/cards/${item}.png`}
            alt="card"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            key={item}
          />
       
      ))}
    </Stack>
  );
};

export default Card;
