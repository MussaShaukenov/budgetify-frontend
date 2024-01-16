import React, { Component } from "react";
import Header from "./Header";
import Grid from "@mui/material/Grid";
import Login from "./Login";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid container style={{marginTop: "5%"}}>
          <Grid item xs={4}>
            <div
              style={{
                width: "100%",
                textAlign: "left",
                marginTop: "25%",
              }}
            >
              <Login />
            </div>
          </Grid>

          <Grid item xs={8}>
            <div style={{ width: "100%" }}>
              <img
                style={{ height: "70%", width: "75%", objectFit: "cover" }}
                src="https://static.vecteezy.com/system/resources/previews/005/482/501/original/illustration-graphic-cartoon-character-of-budget-planning-vector.jpg"
                alt="placeholder"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
