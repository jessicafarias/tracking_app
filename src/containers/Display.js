import PropTypes from 'prop-types';
import Dates from './Dates';
import Tasks from './Tasks';
import TaskForm from './TaskForm';

const Display = ({ toggle }) => {
  if (toggle === 'Add') {
    return (<TaskForm />);
  }
  if (toggle === 'Tasks') {
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
