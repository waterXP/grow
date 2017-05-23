import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AbilityCanvas.css';

class AbilityCanvas extends Component {
  static propTypes = {
    drawAbilities: PropTypes.func.isRequired,
    abilities: PropTypes.arrayOf(PropTypes.shape({
      ability: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      experience: PropTypes.number.isRequired,
      updateTime: PropTypes.number.isRequired,
      factor: PropTypes.number
    }).isRequired).isRequired
  }

  componentDidMount () {
    const canvas = document
    .querySelector('#abilities-canvas');

    this.props.drawAbilities(canvas);
  }

  render () {
    return (
      <div className='ability-canvas'>
        <canvas width='300' height='240' id='abilities-canvas'>
          Canvas
        </canvas>
      </div>
    )
  }
}

export default AbilityCanvas;
