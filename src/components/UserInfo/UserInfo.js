import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './UserInfo.css';

class UserInfo extends Component {
  static propTypes = {
    iconUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    job: PropTypes.string,
    updateTime: PropTypes.number
  }

  render () {
    let props = this.props;
    const limitTime = +moment(props.updateTime)
      .add(1, 'days')
      .set({hour: 0, minute: 0, second: 0})
      .format('x');
    return (
      <div className='user-info bordered'>
        {limitTime < +new Date()
          ? <button className='btn btn-xs btn-primary float-btn'>未更新</button>
          : <button className='btn btn-xs btn-success float-btn'>已更新</button>}
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
