import { connect } from 'react-redux';
import Abilities from '../../components/Abilities';

const mapStateToProps = (state) => ({
  viewType: state.ability.viewType
});

const AbilitiesContainer = connect(
  mapStateToProps
)(Abilities);

export default AbilitiesContainer;
