import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './Ability.css'

const Ability = (props) => (
  <li className='ability'>
    <p>{props.name}</p>
    <span>
      {moment(props.updateTime).format('YYYY-MM-DD HH:mm:ss')}
    </span>
  </li>  
)

Ability.propTypes = {
  ability: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  updateTime: PropTypes.number.isRequired
}

export default Ability
