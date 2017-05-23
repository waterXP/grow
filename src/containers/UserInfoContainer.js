import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';

const mapStateToProps = (state) => ({
  iconUrl: state.user.iconUrl,
  name: state.user.name,
  age: state.user.age,
  job: state.user.job,
  updateTime: state.user.updateTime
});

const UserInfoContainer = connect(
  mapStateToProps
)(UserInfo);

export default UserInfoContainer;
