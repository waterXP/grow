import React from 'react'
import './AbilityCanvas.css'

import AbilityNav from '../AbilityNav'

const AbilityCanvas = (props) => (
    <div className='ability-canvas'>
      <AbilityNav active='canvas' />
      <canvas>
        Canvas
      </canvas>
    </div>
)

export default AbilityCanvas
