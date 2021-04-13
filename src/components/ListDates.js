import '../styles/date.css';
import PropTypes from 'prop-types';
import Day from './Day';

const ListDates = ({ tasks, when }) => (
  <div>
    <p className="day-tag">{when}</p>
    {tasks.map(task => (
      <Day key={task.id} task={task} />
    ))}
  </div>
);
ListDates.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    goal: PropTypes.number,
    time: PropTypes.number,
    progress: PropTypes.number,
    expiration_day: PropTypes.string,
  })).isRequired,
  when: PropTypes.string,
};

ListDates.defaultProps = {
  when: 'Tasks',
};

export default ListDates;
