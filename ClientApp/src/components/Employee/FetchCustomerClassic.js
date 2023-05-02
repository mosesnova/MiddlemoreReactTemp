
import React, { Component } from 'react';

import { Link } from "react-router-dom";
export class FetchCustomerClassic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: [],
            id: '',
            name: '',
            address: '',
            showModal: false,
            showDeleteModal: false

        };

    }
    componentDidMount() {
        let that = this;
        let quotes;

        fetch('/customer', {
            method: 'GET'


        }).then(function (response) {

            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(response);
            return response.json();

        }).then(function (data1) {
            console.log("Customer", data1);
            quotes = data1;
            that.setState({ customer: quotes });
            console.log("Customer", that.state.customer);
        }).catch(err => {
            console.log("caught it", err);
        });

    }

    render() {
        return (<div><h1>Fetch Order</h1>
            <Link to="/AddCustomer">AddCustomer</Link>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.customer.map(member =>
                            <tr key={member.id}>
                                <td>{member.id}</td>
                                <td>{member.name}</td>
                                <td>{member.address}</td>
                            </tr>)
                    }
                </tbody>

            </table>
        </div>);
    }
}
