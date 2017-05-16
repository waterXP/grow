import { connect } from 'react-redux';
import AbilityList from '../../components/AbilityList';

const mapStateToProps = (state) => ({
});

const AbilityListContainer = connect(
  mapStateToProps
)(AbilityList);

export default AbilityListContainer;
