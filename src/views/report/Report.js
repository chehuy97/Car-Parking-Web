import React, { Component } from "react";
import SideBar from "../../components/sidebar/Sidebar";
import { Table, Modal, Button } from "react-bootstrap";
import "./Report.css";
import Axios from "axios";
export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportData: [],
      show: false,
      refreshData: false
    };
  }
  // RefreshData = async () => {

  // }
  changeShow = () => {
    this.setState({ show: !this.state.show });
  };
  getAllAccount = async () => {
    var res = await Axios.get("http://192.168.21.90:3000/api/admins/reports");
    this.setState({ reportData: res.data });
  };
  reportHandling = async reportId => {
    var res = await Axios.get(
      "http://192.168.21.90:3000/api/admins/reports/" + reportId
    );
    this.getAllAccount();
    alert("processed successfully");
  };
  componentDidMount = () => {
    this.getAllAccount();
  };
  render() {
    return (
      <div>
        <SideBar />
        <p className="OwnerTitle">Report</p>
        <Table striped bordered hover size="sm" className="Table">
          <thead className="tableColumnName">
            <tr>
              <th>Id</th>
              <th>Car Number</th>
              <th>Time Come</th>
              <th>Time Leave</th>
              <th>Day</th>
              <th>Yard Id</th>
              <th>Slot</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {this.state.reportData.map(item => (
              <tr>
                <td>{item.id}</td>
                <td>{item.car_number}</td>
                <td>{item.transaction.time_come}</td>
                <td>{item.transaction.time_leave}</td>
                <td>{item.transaction.day}</td>
                <td>{item.transaction.yardId}</td>
                <td>{item.transaction.slot}</td>
                <td>
                  <input
                    type="image"
                    alt="button"
                    src="https://image.flaticon.com/icons/png/512/1660/1660179.png"
                    className="btnDetail"
                    onClick={() => this.reportHandling(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <Modal show={this.state.show} onHide={() => this.changeShow()}>
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
        </Modal> */}
      </div>
    );
  }
}
