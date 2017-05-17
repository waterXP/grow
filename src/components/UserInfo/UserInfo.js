import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserInfo.css';

class UserInfo extends Component {
  static propTypes = {
    iconUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    job: PropTypes.string
  }

  render () {
    let props = this.props;
    return (
      <div className='user-info bordered'>
        <img className='icon' src={props.iconUrl} alt={props.name} />
        <div className='base'>
          <label>姓名：</label>
          <label>{props.name}</label>
          {props.age && <label>年龄：</label>}
          {props.age && <label>{props.age}</label>}
          {props.job && <label>工作：</label>}
          {props.job && <label>{props.job}</label>}
        </div>
      </div>
    );
  }
}

export default UserInfo;
