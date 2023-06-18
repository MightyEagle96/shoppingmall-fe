import { Typography } from "@mui/material";
import React, { useState } from "react";

export default function TestPage() {
  const [userData, setUserData] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="container mt-5 mb-5">
        <Typography variant="h2">Registration Form</Typography>

        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Phone Number"
                name="phoneNumber"
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-success">submit</button>
          </div>
          <div className="col-lg-6">
            <div className="mb-2">{userData.name}</div>
            <div className="mb-2">{userData.email}</div>
            <div className="mb-2">{userData.password}</div>
            <div className="mb-2">{userData.phoneNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
