import React from "react";
import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      bgcolor="lightcoral"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
