import React, { Component } from 'react';
import './App.css';
import { getCustomerList, postCustomer } from '../customer'
import Header from './Header/Header';
import List from './List/List';
import Workspace from './Workspace/Workspace';



class App extends Component {
  constructor() {
    super()
    this.state = {
      customerList: undefined,
      initialLoad: true,
      creating: false,
      currentCustomer: null
    }
    this.startNewCustomer = this.startNewCustomer.bind(this);
    this.createCustomer = this.createCustomer.bind(this);
  }

  createCustomer(customer) {
    postCustomer(customer).then(response => {
      getCustomerList().then(list => {
        this.setState({
          initialLoad:true,
          creating: false,
          customerList: list
        })
      })
    })
    
  }

  startNewCustomer() {
    this.setState( {
      creating: true,
      initialLoad: false,
      currentCustomer: null
    })
  }

  componentDidMount() {
    getCustomerList().then(list => {
      this.setState({customerList: list});
    })
  }

  render() {
  return (
      <div>
        <Header />
        <div className="App__container">
          {
            this.state.customerList ?
            <List
              customerList={this.state.customerList || []}
              startNewCustomer={this.startNewCustomer}
              />
            : null
          }
          <Workspace initialLoad={this.state.initialLoad}
                    createCustomer={this.createCustomer}
                    currentCustomer={this.state.currentCustomer}
                    creating={this.state.creating}
                  />
        </div>
      </div>
    )
  }
}

export default App;
