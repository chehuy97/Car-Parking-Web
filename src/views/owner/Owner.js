import React, { Component } from "react";
import SideBar from "../../components/sidebar/Sidebar";
import { Table, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import "./Owner.css";
import Axios from "axios";
export default class Owner extends Component {
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
          </tbody>
          <input
            type="image"
            alt="button"
            src="https://image.flaticon.com/icons/svg/104/104618.svg"
            className="btnDetail"
            onClick={() => this.changeShow()}
          />
        </Table>
        <Modal show={this.state.show} onHide={() => this.changeShow()}>
          <Modal.Header closeButton>
            <Modal.Title>Owner Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Usenname</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="password"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Fullname</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="fullname"
                aria-label="fullname"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Birthday</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="birthday"
                aria-label="birthday"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Gender</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="gender"
                aria-label="gender"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="phone"
                aria-label="phone"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
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
