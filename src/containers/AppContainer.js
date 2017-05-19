import { connect } from 'react-redux';
import App from '../components/App';

import { getUserInfo } from '../actions/UserAction';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  getUserInfo
};

const AppContainer= connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
