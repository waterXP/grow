import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Ability.css';

const Ability = (props) => (
  <tr>
    <td>{props.name}</td>
    <td>{props.experience}</td>
    <td>{Math.floor(props.experience / props.factor)}</td>
    <td>{moment(props.updateTime).format('YYYY-MM-DD')}</td>
  </tr>
);

Ability.propTypes = {
  ability: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  updateTime: PropTypes.number.isRequired,
  factor: PropTypes.number
};

export default Ability;
