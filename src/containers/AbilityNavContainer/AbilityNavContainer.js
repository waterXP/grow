import { connect } from 'react-redux';
import AbilityNav from '../../components/AbilityNav';

import { changeType } from '../../actions/AbilityAction'

const mapStateToProps = (state) => ({
  viewType: state.ability.viewType
});

const mapDispatchToProps = {
  changeType
};

const AbilityNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AbilityNav);

export default AbilityNavContainer;
