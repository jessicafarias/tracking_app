import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import { connect } from 'react-redux';
import Date from '../components/Date';
import Progress from '../components/Progess';
import Task from '../components/task';
import '../styles/tasks.css';
import getTasks from '../requests/getTasks';
import { fetchTasksAction } from '../actions';
import NoticeError from '../components/NoticeError';
import Loading from '../components/loading';

const Tasks = ({ tasks, get }) => {
  const [load, setLoading] = useState(true);

  useEffect(() => {
    if (!(localStorage.getItem('token') === true || localStorage.getItem('token') === false)) {
      const token = JSON.parse(localStorage.getItem('token'));

      getTasks(token).then(response => {
        if (response.error === 'Access token is missing in the request'
        || response.error === 'Invalid access token') {
          window.location.assign('/login');
        } else {
          if (response.length === 0) {
            reactDom.render(
              <NoticeError message="You don't have any task created" />,
              document.getElementById('notice').appendChild(document.createElement('DIV')),
            );
          }
          setTimeout(() => {
            setLoading(false);
            get(response);
          }, 2000);
        }
      });
    }
  }, []);
  if (tasks.length === 0 && load) {
    return (
      <Loading display={load} />
    );
  }
  return (
    <div>
      <div>
        <Date />
        <Progress items={tasks} />
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
