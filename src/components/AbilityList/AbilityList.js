import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AbilityList.css';

import Ability from '../Ability';

class AbilityList extends Component {
  static propTypes = {
    getUserAbilities: PropTypes.func.isRequired,
    abilities: PropTypes.arrayOf(PropTypes.shape({
      ability: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      experience: PropTypes.number.isRequired,
      updateTime: PropTypes.number.isRequired
    }).isRequired).isRequired    
  }

  componentDidMount () {
    this.props.getUserAbilities();
  }

  render () {
    return (
      <div className='ability-list'>
        <ul>
          {this.props.abilities.map((ability) =>
            <Ability
              key={ability.ability}
              {...ability}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default AbilityList;
