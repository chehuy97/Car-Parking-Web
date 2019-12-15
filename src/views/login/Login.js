import React, { Component } from "react";
import { Tab, Tabs, Form, Button } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  login = async () => {
    axios
      .post("http://192.168.21.90:3000/api/accounts/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(async res => {
        if (res.data === "wrong") {
          alert("You type wrong name or password");
        } else {
          if (
            res.data.account.roles[0].id === 2 ||
            res.data.account.roles[0].id === 3
          ) {
            alert("You type wrong name or password");
          } else {
            await localStorage.setItem("accountId", res.data.account.id);
            this.props.history.push("/owner");
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="login-container">
        <Tabs>
          <Tab eventKey="Login" title="Login" className="textTab">
            <div className="formLogin">
              <Form>
                <Form.Text>
                  <b className="textLogin">LOGIN</b>
                </Form.Text>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    <b>Username</b>
                  </Form.Label>
                  <Form.Control
                    value={this.state.username}
                    onChange={event => {
                      this.setState({ username: event.target.value });
                    }}
                    type="username"
                    placeholder="Username"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    <b>Password</b>
                  </Form.Label>
                  <Form.Control
                    value={this.state.password}
                    onChange={event => {
                      this.setState({ password: event.target.value });
                    }}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remenber password" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={e => {
                    this.login();
                    e.preventDefault();
                  }}
                  className="btnLogin"
                >
                  Login
                </Button>
              </Form>
            </div>
          </Tab>
          <Tab eventKey="Information" title="Information">
            <p>2</p>
          </Tab>
          <Tab eventKey="Contact" title="Contact">
            <p>3</p>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default withRouter(Login);
