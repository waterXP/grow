import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './UserInfo.css';

class UserInfo extends Component {
  static propTypes = {
    iconUrl: PropTypes.string.isRequired,
    name: PropTypes.string,
    age: PropTypes.number,
    job: PropTypes.string,
    updateTime: PropTypes.number,
    editPoint: PropTypes.func.isRequired
  }

  render () {
    let props = this.props;
    const updated = props.updateTime
      ? +moment(props.updateTime) 
        .add(1, 'days')
        .set({hour: 0, minute: 0, second: 0})
        .format('x') < +new Date()
      : '';
    return (
      <div className='user-info bordered'>
        {updated && <button
          className={`btn btn-xs float-btn ${updated ? 'btn-primary' : 'btn-success'}`}
          onClick={props.editPoint.bind(this)}>
          {updated ? '未更新' : '已更新'}
        </button>}
        
        <img className='icon' src={props.iconUrl} alt={props.name} />
        <div className='base'>
          {props.name && <label>姓名：</label>}
          {props.name && <label>{props.name}</label>}
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
