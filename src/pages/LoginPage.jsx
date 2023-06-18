import React, { useState, useContext } from "react";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { LoadingButton } from "@mui/lab";
import { Email, Password } from "@mui/icons-material";
import { useNavigate, redirect } from "react-router-dom";
import { httpService } from "../httpService";
import { AlertContext } from "../context/AlertContext";

export default function LoginPage() {
  const navigate = useNavigate();

  const { setAlertData } = useContext(AlertContext);

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await httpService.post("login", user);
    if (data) {
      localStorage.setItem("token", data);
      window.location.assign("/");
    }
    if (error) {
      setAlertData({
        open: true,
        severity: "error",
        horizontal: "center",
        message: error,
      });
    }
  };
  return (
    <div>
      <div className="mt-5 mb-5 container">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="https://images.pexels.com/photos/376361/pexels-photo-376361.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div>
              <div>
                <Typography variant="h3" fontWeight={700} color={"GrayText"}>
                  EAGLE MOTORS <FontAwesomeIcon icon={faCar} />
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                  Login Here
                </Typography>
              </div>
              <div className="mt-4">
                <form>
                  <div className="mb-4">
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Password />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <LoadingButton
                    onClick={handleSubmit}
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Login
                  </LoadingButton>
                </form>
              </div>
              <div className="mt-4">
                <Button onClick={() => navigate("/signup")}>
                  Don't have an account? Sign up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
