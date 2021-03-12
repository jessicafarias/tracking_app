import Date from '../components/Date';
import Progress from '../components/Progess';
import Task from '../components/task';
import '../styles/tasks.css';

const Tasks = () => {
  const tasks = [{
    id: 1,
    name: 'left bicep',
    progress: 60.3,
    img: 'https://img.icons8.com/wired/64/000000/flex-biceps.png',
  }, {
    id: 2,
    name: 'right bicep',
    progress: 80.3,
    img: 'https://img.icons8.com/wired/64/000000/flex-biceps.png',
  }];
  return (
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
};
export default Tasks;
