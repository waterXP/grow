import React from 'react'
import PropTypes from 'prop-types'
import './AbilityNav.css'

const AbilityNav = (props) => (
  <div className='ability-nav pull-right'>
    <button className={props.viewType === 'canvas' ? 'btn btn-xs btn-success' : 'btn btn-xs btn-default'} onClick={props.changeType.bind(null, 'canvas')}>
      <span className="glyphicon glyphicon-cd" aria-hidden="true"></span>
    </button>
    <button className={props.viewType === 'list' ? 'btn btn-xs btn-success' : 'btn btn-xs btn-default'} onClick={props.changeType.bind(null, 'list')}>
      <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
    </button>
  </div>
)

AbilityNav.propTypes = {
  viewType: PropTypes.string.isRequired,
  changeType: PropTypes.func.isRequired
}

export default AbilityNav
