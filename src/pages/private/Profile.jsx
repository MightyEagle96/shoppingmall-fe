import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <div className="mt-5 mb-5 container">
        <Typography variant="h4" fontWeight={700}>
          My Profile
        </Typography>
        <div className="mt-3 text-muted">
          <div className="mb-2">
            <Typography variant="caption">Name:</Typography>
            <Typography variant="h6">
              {user.firstName} {user.lastName}
            </Typography>
          </div>
          <div className="mb-2">
            <Typography variant="caption">Email:</Typography>
            <Typography variant="h6">{user.email}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
