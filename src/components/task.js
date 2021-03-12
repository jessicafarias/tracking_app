import PropTypes from 'prop-types';
import '../styles/tasks.css';

const Task = ({ todo }) => (
  <div className="col-6 p-0">
    <div className="m-2">
      <div className="d-flex flex-row bg-task p-2">
        <div>
          <img src={todo.img} alt="musc" className="img-task" />
        </div>
        <div className="w-100">
          <p className="font-sm text-right">{todo.name}</p>
          <p className="text-right">{todo.progress}</p>
        </div>
      </div>
    </div>
  </div>
);
Task.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    progress: PropTypes.number,
  }).isRequired,
};

export default Task;
