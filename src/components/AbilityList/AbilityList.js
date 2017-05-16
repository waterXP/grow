import React from 'react'
import PropTypes from 'prop-types'
import './AbilityList.css'

import Ability from '../Ability'
import AbilityNav from '../AbilityNav'

const AbilityList = (props) => (
    <div className='ability-list'>
      <AbilityNav active='list' />
      <ul>
        {props.abilities.map((ability) =>
          <Ability
            key={ability.id}
            {...ability}
          />
        )}
      </ul>
    </div>
)

AbilityList.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.number.isRequired,
    lastestUpdateTime: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    categoryId: PropTypes.number,
    categoryName: PropTypes.string
  }).isRequired).isRequired
}

export default AbilityList
