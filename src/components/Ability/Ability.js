import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './Ability.css'

const Ability = (props) => (
  <li className='ability'>
    <p>{props.title}</p>
    <span>
      {moment(props.lastestUpdateTime).format('YYYY-MM-DD HH:mm:ss')}
    </span>
  </li>  
)

Ability.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.number.isRequired,
  lastestUpdateTime: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  categoryId: PropTypes.number,
  categoryName: PropTypes.string
}

export default Ability
