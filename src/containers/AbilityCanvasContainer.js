import { connect } from 'react-redux';
import AbilityCanvas from '../components/AbilityCanvas';

const mapStateToProps = (state) => ({
});

const AbilityCanvasContainer = connect(
  mapStateToProps
)(AbilityCanvas);

export default AbilityCanvasContainer;
