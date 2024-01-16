import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const InputStyle = {
  width: "25rem",
  textAlign: "left",
};

const ButtonStyle = {
  width: "25rem",
  textAlign: "left",
  backgroundColor: "#163A5F",
  borderRadius: "5px",
  padding: "5px 25px",
  fontWeight: "bold",
  color: "#FEFEFE",
  border: "2px solid #163A5F",
  "&:hover": {
    color: "#FEFEFE",
    backgroundColor: "#163A5F",
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  toggleShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const { showPassword } = this.state;

    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "auto" },
        }}
        noValidate
        autoComplete="off"
      >
        <h2>Login</h2>
        <div>
          <Stack direction="column" spacing={2}>
            <TextField
              sx={InputStyle}
              multiline={false}
              autoComplete="off"
              size="small"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              placeholder="Enter username"
            />
            <TextField
              sx={InputStyle}
              multiline={false}
              autoComplete="off"
              size="small"
              id="outlined-basic"
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              placeholder="Enter password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.toggleShowPassword}
                      edge="end"
                      style={{ color: "#163A5F" }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Stack direction="row" spacing={14}>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
              </FormGroup>
              <p style={{ marginTop: "10px", fontWeight: "700" }}>
                Forgot Password
              </p>
            </Stack>

            <Button variant="outlined" size="large" sx={ButtonStyle}>
              Log In
            </Button>
            <div>
              <p style={{ textAlign: "center" }}>
                Don't have an account?{" "}
                <span style={{ fontWeight: "700" }}>Sign Up</span>
              </p>
            </div>
          </Stack>
        </div>
      </Box>
    );
  }
}
