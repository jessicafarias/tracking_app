import PropTypes from 'prop-types';
import '../styles/tasks.css';

const Task = task => (
  <div className="col-6 p-3">
    <div className="d-flex flex-row bg-task">
      <div>
        <img src={task.img} alt="musc" />
      </div>
      <div>
        <p>UNOE</p>
        <p>50.3</p>
      </div>
    </div>
  </div>
);
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Task;
