import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Spinner() {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "rgba(256, 256, 256, 0.6)",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        height: "auto",
        position: "fixed",
        transform: "none",
        width: "auto",
        zIndex: 10,
        justifyContent: "center",
        alignItems : "center"
      }}
    >
      <CircularProgress />
    </Box>
  );
}
