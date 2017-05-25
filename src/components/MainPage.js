import React from 'react';

import UserInfoContainer from '../containers/UserInfoContainer';
import AbilitiesContainer from '../containers/AbilitiesContainer';
import CommentsContainer from '../containers/CommentsContainer';

const MainPage = (props) => (
  <div className='content'>
    <UserInfoContainer />
    <AbilitiesContainer />
    <CommentsContainer />
  </div>
)

export default MainPage;
