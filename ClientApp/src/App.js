import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { FetchCustomer } from './components/Employee/FetchCustomer';
import { FetchCustomerClassic } from './components/Employee/FetchCustomerClassic';
import { FetchCustomerHook } from './components/Employee/FetchCustomerHook';
export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
                <Route path='/FetchCustomer' element={<FetchCustomer />} />
                <Route path='/FetchCustomerClassic' element={<FetchCustomerClassic />} />
                <Route path='/FetchCustomerHook' element={<FetchCustomerHook />} />
        </Routes>
      </Layout>
    );
  }
}
