import React, { Component } from "react";
import SideBar from "../../components/sidebar/Sidebar";
import { Table, Modal, Button } from "react-bootstrap";
import "./Report.css";
import Axios from "axios";
export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerData: [],
      show: false
    };
  }
  changeShow = () => {
    this.setState({ show: !this.state.show });
  };
  getStatus = status => {
    if (status === true) {
      return <td>Active</td>;
    } else {
      return <td>Inactive</td>;
    }
  };
  getAllAccount = async () => {
    var res = await Axios.get("http://192.168.21.90:3000/api/admins/owners");
    this.setState({ ownerData: res.data });
  };
  componentDidMount = () => {
    this.getAllAccount();
  };
  render() {
    return (
      <div>
        <SideBar />
        <p className="OwnerTitle">Owner</p>
        <Table striped bordered hover size="sm" className="Table">
          <thead className="tableColumnName">
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Status</th>
              <th>Name</th>
              <th>Birthday</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Image</th>
              <th>Balance</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.ownerData.map(item => (
              <tr>
                <td>{item.id}</td>
                <td>{item.username}</td>
                {this.getStatus(item.status)}
                <td>{item.name}</td>
                <td>{item.birthday}</td>
                <td>{item.gender}</td>
                <td>{item.phone}</td>
                <td>
                  <img
                    src={item.image}
                    alt="avatar"
                    className="imgCustomerAvatar"
                  />
                </td>
                <td>{item.balance}</td>
                <td>
                  <input
                    type="image"
                    alt="button"
                    src="https://image.flaticon.com/icons/svg/1052/1052666.svg"
                    className="btnDetail"
                    onClick={() => this.changeShow()}
                  />
                </td>
              </tr>
            ))}
            <td>
              <input
                type="image"
                alt="button"
                src="https://image.flaticon.com/icons/svg/104/104618.svg"
                className="btnDetail"
                onClick={() => this.changeShow()}
              />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tbody>
        </Table>
        <Modal show={this.state.show} onHide={() => this.changeShow()}>
          <Modal.Header closeButton>
            <Modal.Title>Owner Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <b className="registerName">Username:</b>
              <input type="text" name="user"></input>
            </p>
            <p>
              <b className="registerName">Name:</b>
              <input type="text" name="name"></input>
            </p>
            <p>
              <b className="registerName">Password:</b>
              <input type="password" name="password"></input>
            </p>
            <p>
              <b className="registerName">Birthday:</b>
              <input type="text" name="birth"></input>
            </p>
            <p>
              <b className="registerName">Gender:</b>
              <input type="text" name="gender"></input>
            </p>
            <p>
              <b className="registerName">Phone: </b>
              <input type="text" name="phone"></input>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.changeShow()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.changeShow()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
