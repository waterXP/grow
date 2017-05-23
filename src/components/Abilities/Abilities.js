import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Abilities.css';

import AbilityCanvasContainer from '../../containers/AbilityCanvasContainer';
import AbilityListContainer from '../../containers/AbilityListContainer';
import AbilityNavContainer from '../../containers/AbilityNavContainer';

class Abilities extends Component {
  static propTypes = {
    viewType: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className='bordered ability-box'>
        <AbilityNavContainer />      
        {
          this.props.viewType === 'canvas' ?
            <AbilityCanvasContainer /> :
            <AbilityListContainer />
        }
      </div>
    )
  }
}

export default Abilities
