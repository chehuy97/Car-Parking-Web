import React, { Component } from "react";
import SideBar from "../../components/sidebar/Sidebar";
import { Table } from "react-bootstrap";
import "./Transaction.css";
import Axios from "axios";

export default class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transsactionData: []
    };
  }

  getAllAccount = async () => {
    var res = await Axios.get(
      "http://192.168.21.90:3000/api/admins/transactions"
    );
    this.setState({ transsactionData: res.data });
  };
  componentDidMount = () => {
    this.getAllAccount();
  };
  render() {
    return (
      <div>
        <SideBar />
        <p className="transactionTitle">Transaction</p>
        <Table striped bordered hover size="sm" className="Table">
          <thead className="tableColumnName">
            <tr>
              <th>Id</th>
              <th>Day</th>
              <th>TimeCome</th>
              <th>TimeLeave</th>
              <th>Price</th>
              <th>Car Number</th>
              <th>Slot</th>
              <th>Customer</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {this.state.transsactionData.map(item => (
              <tr>
                <td>{item.id}</td>
                <td>{item.day}</td>
                <td>{item.time_come}</td>
                <td>{item.time_leave}</td>
                <td>{item.price}</td>
                <td>{item.car_number}</td>
                <td>{item.slot}</td>
                <td>{item.account.name}</td>
                <td>{item.yard.account.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
