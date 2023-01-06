import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Card from "./Card";
import PopupUser from "./PopupUser";
import total3Cards from "../utils/total3Cards";

interface IUser {
  user?: any;
  pointWinner?: number;
  increaseMoney?: number;
}
const User: React.FC<IUser> = ({ user, pointWinner, increaseMoney }) => {
  return (
    <Box
      position={"absolute"}
      zIndex="9999"
      top={
        user.player === 1
          ? "unset"
          : user.player === 2 || user.player === 4
          ? "50%"
          : "0"
      }
      bottom={user.player === 1 ? "0" : "unset"}
      left={
        user.player === 1 || user.player === 3
          ? "50%"
          : user.player === 1
          ? "0"
          : "unset"
      }
      right={user.player === 2 ? "0" : "unset"}
      sx={{
        transform: `translate(${
          user.player === 1
            ? "-50%,-50%"
            : user.player === 2
            ? "-100%,-50%"
            : user.player === 3
            ? "-50%,50%"
            : "100%,-50%"
        })`,
      }}
    >
      {/* thông tin user */}
      <Stack spacing={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar
            alt="avatar-user"
            src={user.avatar}
            sx={{ border: "2px solid red", width: 56, height: 56 }}
          ></Avatar>
          <Typography variant="h5" color="white">
            {user.name}
          </Typography>
          {total3Cards(user.cards) > 0 &&
            total3Cards(user.cards) === pointWinner && (
              <Box color={"yellow"} position="absolute" right={-50}>
                <EmojiEventsIcon fontSize="large" />
              </Box>
            )}
        </Stack>
        <Typography color="white">{user.money} $</Typography>
      </Stack>
      {/* thông tin về card, point */}
      {user.cards.length > 0 && (
        <PopupUser player={user.player} show type="point">
          {`${total3Cards(user.cards)} points`}
        </PopupUser>
      )}
      {/* các card bài */}

      <Card data={user.cards} player={user.player} />

      {total3Cards(user.cards) > 0 && (
        <PopupUser
          show
          type={`${total3Cards(user.cards) !== pointWinner ? "money" : "win"}`}
        >
          {total3Cards(user.cards) !== pointWinner
            ? "-600 $"
            : `+${increaseMoney} $`}
        </PopupUser>
      )}
    </Box>
  );
};

export default User;
