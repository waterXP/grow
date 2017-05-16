import { connect } from 'react-redux';
import AbilityNav from '../../components/AbilityNav';

import { changeType } from '../../actions/AbilitiesAction'

const mapStateToProps = (state) => ({
  viewType: state.abilities.viewType
});

const mapDispatchToProps = {
  changeType
};

const AbilityNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AbilityNav);

export default AbilityNavContainer;
