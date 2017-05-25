import { connect } from 'react-redux';
import App from '../components/App';

import { getUserInfo } from '../actions/UserAction';

const mapStateToProps = (state) => ({
  page: state.base.page
});

const mapDispatchToProps = {
  getUserInfo
};

const AppContainer= connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
