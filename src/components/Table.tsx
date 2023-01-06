import { Button, Stack, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { dataCards } from "../config/dataCards";
import { dataUser } from "../config/dataUser";
import randomItem from "../utils/randomItem";
import pointsWinner from "../utils/pointsWinner";
import User from "./User";
import total3Cards from "../utils/total3Cards";
import totalMoneyWin from "../utils/totalMoneyWin";
import { motion } from "framer-motion";

const Table: React.FC = () => {
  const [position, setPosition] = useState([
    { x: 0, y: 0, rotate: 0, show: false },
    { x: 0, y: 0, rotate: 0, show: false },
    { x: 0, y: 0, rotate: 0, show: false },
    { x: 0, y: 0, rotate: 0, show: false },
    { x: 0, y: 0, rotate: 0, show: false },
    { x: 0, y: 0, rotate: 0, show: false },
    { x: 0, y: 0, rotate: 0, show: false },
    { x: 0, y: 0, rotate: 0, show: false },
    { x: 0, y: 0, rotate: 0, show: false },
    { x: 0, y: 0, rotate: 0, show: false },
    { x: 0, y: 0, rotate: 0, show: false },
    { x: 0, y: 0, rotate: 0, show: false },
  ]);

  const [data, setData] = useState(dataUser);
  const [isOpenCard, setIsOpenCard] = useState(true);

  const openCard = () => {
    const copyUser = [...data];
    const dataCard = [...dataCards];
    copyUser.forEach((user) => {
      user.cards = randomItem(dataCard).result;
    });
    copyUser.forEach((user) => {
      if (total3Cards(user.cards) !== pointsWinner(copyUser)) {
        user.money = user.money - 600;
      } else {
        user.money = user.money + totalMoneyWin(600, copyUser);
      }
    });
    setData(copyUser);
    setIsOpenCard(true);
    setPosition([
      { x: 0, y: 0, rotate: 0, show: false },
      { x: 0, y: 0, rotate: 0, show: false },
      { x: 0, y: 0, rotate: 0, show: false },
      { x: 0, y: 0, rotate: 0, show: false },
      { x: 0, y: 0, rotate: 0, show: false },
      { x: 0, y: 0, rotate: 0, show: false },
      { x: 0, y: 0, rotate: 0, show: false },
      { x: 0, y: 0, rotate: 0, show: false },
      { x: 0, y: 0, rotate: 0, show: false },
      { x: 0, y: 0, rotate: 0, show: false },
      { x: 0, y: 0, rotate: 0, show: false },
      { x: 0, y: 0, rotate: 0, show: false },
    ]);
  };

  const handleTest = () => {
    const copyUser = [...data];
    copyUser.forEach((user) => {
      user.cards = [];
    });
    setData(copyUser);
    setIsOpenCard(false);
    setPosition([
      { x: -57, y: 240, rotate: 720, show: true },
      { x: 28, y: 240, rotate: 720, show: true },
      { x: 113, y: 240, rotate: 720, show: true },
      { x: 880, y: -128, rotate: 720, show: true },
      { x: 793, y: -128, rotate: 720, show: true },
      { x: 710, y: -128, rotate: 720, show: true },
      { x: -57, y: -251, rotate: 720, show: true },
      { x: 28, y: -251, rotate: 720, show: true },
      { x: 113, y: -251, rotate: 720, show: true },
      { x: -820, y: -128, rotate: 720, show: true },
      { x: -733, y: -128, rotate: 720, show: true },
      { x: -650, y: -128, rotate: 720, show: true },
    ]);
  };

  return (
    <>
      <Stack
        justifyContent="space-between"
        direction="column"
        sx={{ minHeight: "100vh" }}
        position="relative"
      >
        {data.map((user) => (
          <User
            key={user.id}
            user={user}
            pointWinner={pointsWinner(data)}
            increaseMoney={totalMoneyWin(600, data)}
          />
        ))}
        {/* button new game & open card */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%);",
            zIndex: "99",
          }}
        >
          <button
            style={{
              width: "80px",
              padding: 0,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <img
              src={`image/cards/back.svg`}
              alt="card"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              onClick={handleTest}
            />
          </button>
        </Box>

        {position.map((item, index) => (
          <Box
            width={77.125}
            height={112}
            position="absolute"
            top="50%"
            left="50%"
            sx={{ transform: "translate(-50%, -50%);" }}
            display={item.show ? "block" : "none"}
            key={index}
          >
            <motion.img
              src={`image/cards/back.png`}
              alt="card"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                zIndex: "-999",
              }}
              onClick={handleTest}
              animate={{ x: item.x, y: item.y, rotate: item.rotate }}
              transition={{ type: "" }}
            />
          </Box>
        ))}

        <Button
          variant="contained"
          color="secondary"
          onClick={openCard}
          sx={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%);",
          }}
          disabled={isOpenCard}
        >
          Open Card
        </Button>

        {/* tiền cược bàn */}
        <Typography variant="h6" color="#fff" position={"absolute"}>
          Gambling: 600 $
        </Typography>
      </Stack>
    </>
  );
};

export default Table;
