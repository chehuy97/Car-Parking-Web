import React, { Component } from "react";
import "./Sidebar.css";
import { Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Axios from "axios";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountData: {}
    };
  }

  getAccount = async () => {
    var id = localStorage.getItem("accountId");
    const res = await Axios.get("http://192.168.21.90:3000/api/accounts/" + id);
    this.setState({ accountData: res.data });
  };
  componentDidMount = () => {
    this.getAccount();
  };
  render() {
    return (
      <div className="sidenav">
        <div className="blockImageUsername">
          <img
            src={this.state.accountData.image}
            alt="avatar"
            className="imgAvatar"
          />
          <p className="textUsername">{this.state.accountData.username}</p>
        </div>
        <div>
          <a href="/owner">
            <img
              src={require("../../assets/image/home.png")}
              alt="home"
              className="imgItem"
            />
            Owner
          </a>
        </div>
        <div>
          <Link to="/customer">
            <img
              src={require("../../assets/image/man-user.png")}
              alt="home"
              className="imgItem"
            />
            Customer
          </Link>
        </div>
        <div>
          <Link to="/transaction">
            <img
              src={require("../../assets/image/bank.png")}
              alt="bank"
              className="imgItem"
            />
            Transaction
          </Link>
        </div>
        <div>
          <Link to="/report">
            <img
              src={require("../../assets/image/newspaper.png")}
              alt="report"
              className="imgItem"
            />
            Report
          </Link>
        </div>
        <div>
          <a href="#infomation">
            <img
              src={require("../../assets/image/information-icon.png")}
              alt="info"
              className="imgItem"
            />
            Information
          </a>
        </div>
        <Button
          variant="outline-light"
          className="btnLogout"
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          Log out
        </Button>
      </div>
    );
  }
}
export default withRouter(Sidebar);
