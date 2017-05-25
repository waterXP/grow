import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';

import { toPage } from '../actions/BaseAction';

const mapStateToProps = (state) => ({
  iconUrl: state.user.iconUrl,
  name: state.user.name,
  age: state.user.age,
  job: state.user.job,
  updateTime: state.user.updateTime
});

const mapDispatchToProps = {
  editPoint: toPage.bind(null, 'custom')
};

const UserInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);

export default UserInfoContainer;
