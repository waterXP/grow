import { connect } from 'react-redux';
import App from '../../components/App';

import { testFetch } from '../../actions/UserInfoAction';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  testFetch
};

const AppContainer= connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
