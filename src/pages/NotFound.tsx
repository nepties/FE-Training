import React from "react";
import { Box } from "@mui/material";
import images from "assets";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${images.b404})`,
        backgroundPositionX: "50%",
        backgroundPositionY: "0%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        textAlign: "center",
        verticalAlign: "middle",
      }}
    >
      <Box>
        <img src={images.title404} alt="" />
      </Box>
    </Box>
  );
};

export default NotFound;
