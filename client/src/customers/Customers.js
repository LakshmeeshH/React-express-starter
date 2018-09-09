import React, { Component } from 'react';
import './Customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({ customers }));
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <hr />
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>
              <span style={{ color: 'blue' }}>{customer.firstName}</span>{' '}
              <span style={{ color: 'red' }}>{customer.lastName}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
