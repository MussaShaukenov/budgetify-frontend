import React, { Component } from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

export default class Header extends Component {
  render() {
    return (
      <Stack sx={HeaderContainer} direction="row" spacing={1}>
        <div style={HeaderTitle}>budgetify</div>
        <div style={HeaderSections}>
          <div>Home</div>
          <div>Features</div>
          <div>About</div>
          <div>FAQ</div>
        </div>
          <Stack direction="row" spacing={4}>
            <Button variant="outlined" sx={LoginButton}>
              Log In
            </Button>
            <Button variant="contained" sx={SignUpButton}>
              Sign Up
            </Button>
          </Stack>
      </Stack>
    );
  }
}

// Styling
const HeaderContainer = {
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const HeaderTitle = {
  fontSize: "1.5rem",
  fontWeight: "900",
  color: "#163A5F",
  textTransform: "uppercase",
};

const HeaderSections = {
  fontSize: "1.2rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "30%",
};

const LoginButton = {
  backgroundColor: "#FEFEFE",
  borderRadius: "20px",
  padding: "5px 25px",
  fontWeight: "bold",
  color: "#163A5F",
  border: "2px solid #163A5F",
};

const SignUpButton = {
  backgroundColor: "#163A5F",
  borderRadius: "20px",
  padding: "5px 25px",
  fontWeight: "bold",
  color: "#FEFEFE",
  border: "2px solid #163A5F",
};
