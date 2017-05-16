import React from 'react';
import './app.css';

import UserInfoContainer from '../../containers/UserInfoContainer';
import AbilitiesContainer from '../../containers/AbilitiesContainer';
import CommentsContainer from '../../containers/CommentsContainer';

const App = () => (
  <div className='app'>
    <UserInfoContainer />
    <AbilitiesContainer />
    <CommentsContainer />
  </div>
);

export default App;
