import React, { Component } from "react";
import SideBar from "../../components/sidebar/Sidebar";
import { Table } from "react-bootstrap";
import "./Customer.css";
import Axios from "axios";

export default class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerData: []
    };
  }

  getAllAccount = async () => {
    var res = await Axios.get("http://192.168.21.90:3000/api/admins/customers");
    this.setState({ customerData: res.data });
    console.log(res.data);
  };
  componentDidMount = () => {
    this.getAllAccount();
  };
  getStatus = status => {
    if (status === true) {
      return <td>Active</td>;
    } else {
      return <td>Inactive</td>;
    }
  };
  render() {
    return (
      <div>
        <SideBar />
        <p className="customerTitle">Customer</p>
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
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customerData.map(item => (
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
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
