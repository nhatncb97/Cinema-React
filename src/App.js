import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Routerr from "./component/main/route";
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {
  //Lấy thông tin khi refresh trang
  componentDidMount() {
    if (localStorage.getItem('token') !== null) {
      var token = localStorage.getItem('token');
      axios({
        method: 'get',
        url: 'https://radiant-sea-16513.herokuapp.com/api/users/checktoken',
        headers: {
          Authorization: 'bearer ' + token
        }
      })
        .then((response) => {
          var dispatch = this.props.dispatch;
          dispatch(
            {
              type: 'LOG_IN',
              username: response.data.username,
              email: response.data.email,
              lastname: response.data.lastname,
              firstname: response.data.firstname,
              phone: response.data.phone,
              dateOfBirth: response.data.dateOfBirth,
              avatar: response.data.avatar,
              loginState: 'true'
            });
        })
        .catch((response) => {
          console.log('Get information Error ' + response);
          localStorage.removeItem('token');
          //handle error
        });
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routerr />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
