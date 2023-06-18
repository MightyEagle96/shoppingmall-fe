import React, { useState, useContext } from "react";
import {
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Email, Password, Person } from "@mui/icons-material";
import { httpService } from "../httpService";
import { AlertContext } from "../context/AlertContext";
import { useNavigate } from "react-router-dom";
import MySnackBarContext from "../components/MySnackBar";

export default function SignUpPage() {
  const [type, setType] = useState("password");
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const { setAlertData } = useContext(AlertContext);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await httpService.post("createaccount", user);
    if (data) {
      localStorage.setItem("token", data);
      window.location.assign("/");
    }

    if (error) {
      setAlertData({
        open: true,
        severity: "error",
        message: error,
        horizontal: "center",
        vertical: "bottom",
      });
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const changeType = () => setType(type === "password" ? "text" : "password");

  const checkPassword = (e) => {
    if (e.target.value !== user.password) {
      return setError({ hasError: true, message: "passwords don't match" });
    }
    setError(null);
  };
  return (
    <div>
      <div className="mt-5 mb-5 container">
        <div className="row">
          <div className="col-lg-5">
            <Typography variant="h4" textAlign={"center"} fontWeight={700}>
              Create Account
            </Typography>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <TextField
                  fullWidth
                  tabIndex={0}
                  label="First Name"
                  name="firstName"
                  required
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>{" "}
              <div className="mt-3">
                <TextField
                  fullWidth
                  tabIndex={1}
                  label="Last Name"
                  name="lastName"
                  required
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>{" "}
              <div className="mt-3">
                <TextField
                  tabIndex={2}
                  fullWidth
                  label="Email"
                  name="email"
                  required
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>{" "}
              <div className="mt-3">
                <TextField
                  fullWidth
                  tabIndex={3}
                  label="Password"
                  name="password"
                  type={type}
                  required
                  onChange={handleChange}
                  error={error && error.hasError}
                  helperText={error && error.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton onClick={changeType} size="small">
                          <FontAwesomeIcon
                            icon={type === "password" ? faEye : faEyeSlash}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>{" "}
              <div className="mt-3">
                <TextField
                  tabIndex={4}
                  fullWidth
                  label="Confirm Password"
                  required
                  type={type}
                  onBlur={checkPassword}
                  error={error && error.hasError}
                  helperText={error && error.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton onClick={changeType} size="small">
                          <FontAwesomeIcon
                            icon={type === "password" ? faEye : faEyeSlash}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="mt-3">
                <LoadingButton
                  tabIndex={5}
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={error && error.hasError}
                >
                  Create Account
                </LoadingButton>
              </div>
            </form>
            <div className="mt-4">
              <Button onClick={() => navigate("/login")}>
                Already have an account? Login
              </Button>
            </div>
          </div>
          <div className="col-lg-7 signupBanner shadow-sm rounded-3 text-white p-5 d-flex align-items-end">
            <div>
              <Typography fontWeight={100} variant="h3">
                <FontAwesomeIcon icon={faCar} /> EAGLE MOTORS
              </Typography>
              <Typography fontWeight={700} fontStyle={"italic"}>
                Drive where the winds takes you...
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
