import { connect } from 'react-redux';
import AbilityCanvas from '../components/AbilityCanvas';

import { drawAbilities} from '../actions/AbilityAction';

const mapStateToProps = (state) => ({
  abilities: state.ability.drawData
});

const mapDispatchToProps = {
  drawAbilities
};

const AbilityCanvasContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AbilityCanvas);

export default AbilityCanvasContainer;
