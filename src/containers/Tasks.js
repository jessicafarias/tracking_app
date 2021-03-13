import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Date from '../components/Date';
import Progress from '../components/Progess';
import Task from '../components/task';
import '../styles/tasks.css';

const Tasks = ({ tasks }) => (
  <div>
    <div>
      <Date />
      <Progress show={3} />
    </div>
    <div className="bg-tasks">

      <div className="row">
        {tasks.map(todo => (
          <Task
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>

    </div>
  </div>
);

const mapStateToProps = state => ({
  tasks: state.tasks,
});

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    progress: PropTypes.number,
  })).isRequired,
};

export default connect(mapStateToProps, null)(Tasks);
