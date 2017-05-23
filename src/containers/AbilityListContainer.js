import { connect } from 'react-redux';
import AbilityList from '../components/AbilityList';

import { getUserAbilities } from '../actions/AbilityAction';

const mapStateToProps = (state) => ({
  abilities: state.ability.list
});

const mapDispatchToProps = {
  getUserAbilities
};

const AbilityListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AbilityList);

export default AbilityListContainer;
