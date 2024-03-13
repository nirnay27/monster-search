import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Item } from "../Item";
import { Component } from "react";
import React from "react";
import axios from "axios";
import CustomizedTables from "../users";
import SignModal from "../users/alert";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      userid: "",
      username: "",
      email: "",
      password: "",
      toggle: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { userid, username, email, password, toggle } = this.state;

    try {
      const { signUpResponse } = axios.post(
        "http://localhost:8085/user/registration",
        {
          userid,
          username,
          email,
          password,
        }
      );

      console.log(signUpResponse);
      alert("sucessfully registered");
    } catch (error) {
      console.log(error);
      alert("registration failed pls try again");
    }
  }
  render() {
    return (
      <>
        {this.state.toggle}
        <form onSubmit={this.handleSubmit}>
          <Grid
            item
            xs={6}
            style={{ paddingRight: "40px", paddingBottom: "40px" }}
          >
            <Grid item xs={12}>
              <Item>
                <TextField
                  id="user-id"
                  label="User Id"
                  variant="outlined"
                  name="userid"
                  onChange={this.handleChange}
                  value={this.state.user_id}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <TextField
                  id="user-name"
                  label="User Name"
                  variant="outlined"
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </Item>
            </Grid>
            <Item>
              <Button variant="contained" type="submit">
                Signup
              </Button>
            </Item>
          </Grid>
        </form>

        <CustomizedTables />
      </>
    );
  }
}
export default Signup;
