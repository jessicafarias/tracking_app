import PropTypes from 'prop-types';
import Dates from './Dates';
import Tasks from './Tasks';
import TaskForm from './TaskForm';
import UpdateForm from './UpdateForm';
import NoticeLogin from '../components/NoticeLogin';

const Display = ({ toggle }) => {
  if (toggle === 'Add') {
    return (
      <>
        <NoticeLogin />
        <TaskForm />
      </>
    );
  }
  if (toggle === 'Tasks') {
    return (<Dates />);
  }
  if (toggle === 'Update') {
    return (<UpdateForm />);
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
