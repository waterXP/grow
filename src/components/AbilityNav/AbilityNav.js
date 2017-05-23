import React from 'react';
import PropTypes from 'prop-types';
import './AbilityNav.css';

const AbilityNav = (props) => (
  <div className='ability-nav pull-right'>
    <button
      className={
        `btn btn-xs ${props.viewType === 'canvas'
        ? 'btn-success'
        : 'btn-default'}`
      }
      onClick={
        props.viewType === 'list'
        && props.changeType.bind(null, 'canvas')
      }>
      <span
        className="glyphicon glyphicon-cd"
        aria-hidden="true">
      </span>
    </button>
    <button
      className={
        `btn btn-xs ${props.viewType === 'list'
        ? 'btn-success'
        : 'btn-default'}`
      }
      onClick={
        props.viewType === 'canvas'
        && props.changeType.bind(null, 'list')
      }>
      <span
        className="glyphicon glyphicon-align-justify"
        aria-hidden="true">
      </span>
    </button>
  </div>
);

AbilityNav.propTypes = {
  viewType: PropTypes.string.isRequired,
  changeType: PropTypes.func.isRequired
};

export default AbilityNav;
