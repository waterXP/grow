import { connect } from 'react-redux';
import UserInfo from '../../components/UserInfo';

import { getUserInfo } from '../../actions/UserInfoAction';

const mapStateToProps = (state) => ({
  iconUrl: state.user.iconUrl,
  name: state.user.name,
  age: state.user.age,
  job: state.user.job
});

const mapDispatchToProps = {
  getUserInfo
};

const UserInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);

export default UserInfoContainer;
