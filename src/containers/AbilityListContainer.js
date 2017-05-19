import { connect } from 'react-redux';
import AbilityList from '../components/AbilityList';

import { getUserAbilities } from '../actions/UserAction';

const mapStateToProps = (state) => ({
  abilities: state.user.abilities
});

const mapDispatchToProps = {
  getUserAbilities
};

const AbilityListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AbilityList);

export default AbilityListContainer;
