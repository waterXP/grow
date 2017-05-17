import React from 'react';
import PropTypes from 'prop-types';
import './Abilities.css';

import AbilityCanvasContainer from '../../containers/AbilityCanvasContainer';
import AbilityListContainer from '../../containers/AbilityListContainer';
import AbilityNavContainer from '../../containers/AbilityNavContainer';

const Abilities = (props) => {
  const abilities = [
    {
      id: 1,
      type: 0,
      updateTime: 133333333,
      title: '测试'
    }, {
      id: 2,
      type: 0,
      updateTime: 133333333,
      title: '测试2'
    }, {
      id: 3,
      type: 0,
      updateTime: 133333333,
      title: '测试3'
    }, {
      id: 4,
      type: 0,
      updateTime: 133333333,
      title: '测试4'
    }, {
      id: 5,
      type: 0,
      updateTime: 133333333,
      title: '测试5'
    }
  ]
  return (
    <div className='bordered'>
      <AbilityNavContainer />      
      {
        props.viewType === 'canvas' ?
          <AbilityCanvasContainer abilities={abilities} /> :
          <AbilityListContainer abilities={abilities} />
      }
    </div>
  )
}

Abilities.PropTypes = {
  viewType: PropTypes.string.isRequired
}

export default Abilities
