import { Box, Typography } from "@mui/material";
import React from "react";

interface IPopupUser {
  children: string;
  type: "win" | "point" | "money";
  show: boolean;
  player?: number;
}
const PopupUser: React.FC<IPopupUser> = ({ children, type, show, player }) => {
  return (
    <Box
      sx={{
        width: "200px",
        color: "#fff",
        // display:"inline",
        display: `${show ? "block" : "none"}`,
        textAlign: "center",
        position: `absolute`,
        top: `${
          type === "point" && player === 3
            ? "150%"
            : type === "point"
            ? "-100%"
            : "70%"
        }`,
        left: `${type === "point" ? "15%" : "20%"}`,
        zIndex: "9",
        background: `${type === "point" ? "red" : "unset"}`,
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" color={`${type === "win" ? "yellow" : "#fff"}`}>
        {children}
      </Typography>
    </Box>
  );
};

export default PopupUser;
