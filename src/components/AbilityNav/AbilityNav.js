import React from 'react'
import PropTypes from 'prop-types'
import './AbilityNav.css'

const AbilityNav = (props) => (
  <div className='ability-nav pull-right'>
    <button className={props.active === 'canvas' ? 'btn btn-xs btn-success' : 'btn btn-xs btn-default'}>
      <span className="glyphicon glyphicon-cd" aria-hidden="true"></span>
    </button>
    <button className={props.active === 'list' ? 'btn btn-xs btn-success' : 'btn btn-xs btn-default'}>
      <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
    </button>
  </div>
)

AbilityNav.propTypes = {
  active: PropTypes.string.isRequired
}

export default AbilityNav
