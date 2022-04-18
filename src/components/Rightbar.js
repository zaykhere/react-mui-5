import React from "react";
import { Box, Typography } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={200}>
          Online Friends
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
