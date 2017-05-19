import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.css';

import UserInfoContainer from '../../containers/UserInfoContainer';
import AbilitiesContainer from '../../containers/AbilitiesContainer';
import CommentsContainer from '../../containers/CommentsContainer';

class App extends Component {
  static propTypes = {
    getUserInfo: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.getUserInfo();
  }

  render () {
    return (
      <div className='app'>
        <UserInfoContainer />
        <AbilitiesContainer />
        <CommentsContainer />
      </div>
    );
  }
}

export default App;
