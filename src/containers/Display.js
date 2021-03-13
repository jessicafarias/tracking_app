import PropTypes from 'prop-types';
import Dates from './Dates';
import Tasks from './Tasks';

const Display = ({ toggle }) => {
  if (toggle === 'Add') {
    return (<Dates />);
  }
  return (<Tasks />);
};

Display.propTypes = {
  toggle: PropTypes.string,
};

Display.defaultProps = {
  toggle: 'Add',
};

export default Display;
