import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Date from '../components/Date';
import Progress from '../components/Progess';
import Task from '../components/task';
import '../styles/tasks.css';
import getTasks from '../requests/getTasks';
import { fetchTasksAction } from '../actions';

const Tasks = ({ tasks, get }) => {
  useEffect(() => {
    getTasks().then(response => {
      if (response.message === 'Access token is missing in the request') {
        window.location.assign('/login');
      }
      get(response);
      console.log(response);
    });
  }, []);
  return (
    <div>
      <div>
        <Date />
        <Progress show={3} items={tasks} />
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
};
const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  get: tasks => {
    dispatch(fetchTasksAction(tasks));
  },
});

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    progress: PropTypes.number,
  })).isRequired,
  get: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
