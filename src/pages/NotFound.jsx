import React from "react";
import { Typography } from "@mui/material";

export default function NotFound() {
  return (
    <div>
      <div className="mt-5 mb-5 container">
        <Typography fontWeight={700} variant="h4" gutterBottom>
          ERROR 404
        </Typography>
        <Typography color={"GrayText"}>Page Not Found</Typography>
      </div>
    </div>
  );
}
