import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import MainPage from '../MainPage';
import CustomPage from '../CustomPage';

class App extends Component {
  static propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    page: PropTypes.string.isRequired
  }

  componentDidMount () {
    this.props.getUserInfo();
  }

  render () {
    let route;
    switch (this.props.page) {
      case 'main':
        route = <MainPage />;
        break;
      case 'custom':
        route = <CustomPage />;
        break;
      default:
        route = <MainPage />;
    }
    return (
      <div className='app'>{route}</div>
    );
  }
}

export default App;
