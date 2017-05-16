import React from 'react'
import './app.css'

import UserInfo from '../../containers/UserInfoContainer'
import Abilities from '../Abilities'
import Comments from '../Comments'

const App = () => (
  <div className='app'>
    <UserInfo />
    <Abilities />
    <Comments />
  </div>
)

export default App
