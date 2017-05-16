import React from 'react'
import PropTypes from 'prop-types'
import './Abilities.css'

import AbilityCanvas from '../AbilityCanvas'
import AbilityList from '../AbilityList'

const Abilities = (props) => {
  props = props.viewType || {
    viewType: 'list'
  }
  const abilities = [
    {
      id: 1,
      type: 0,
      lastestUpdateTime: 133333333,
      title: '测试'
    }, {
      id: 2,
      type: 0,
      lastestUpdateTime: 133333333,
      title: '测试2'
    }, {
      id: 3,
      type: 0,
      lastestUpdateTime: 133333333,
      title: '测试3'
    }, {
      id: 4,
      type: 0,
      lastestUpdateTime: 133333333,
      title: '测试4'
    }, {
      id: 5,
      type: 0,
      lastestUpdateTime: 133333333,
      title: '测试5'
    }
  ]
  return (
    <div className='bordered'>
      {
        props.viewType === 'canvas' ?
          <AbilityCanvas abilities={abilities} /> :
          <AbilityList abilities={abilities} />
      }
    </div>
  )
}

Abilities.PropTypes = {
  viewType: PropTypes.string.isRequired
}

export default Abilities
