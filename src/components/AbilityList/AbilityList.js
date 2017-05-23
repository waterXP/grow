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
      updateTime: PropTypes.number.isRequired,
      factor: PropTypes.number
    }).isRequired).isRequired
  }

  componentDidMount () {
    this.props.getUserAbilities();
  }

  render () {
    return (
      <div className='ability-list'>
        <table className='table center'>
          <thead>
            <tr>
              <th>名称</th>
              <th>累计时长</th>
              <th>评价</th>
              <th>更新时间</th>
            </tr>
          </thead>
          <tbody>
            {this.props.abilities.map((ability) =>
              <Ability
                key={ability.ability}
                {...ability}
              />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AbilityList;
