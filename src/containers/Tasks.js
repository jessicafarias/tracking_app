import Date from '../components/Date';
import Progress from '../components/Progess';
import Task from '../components/task';
import '../styles/tasks.css';

const Tasks = () => {
  const tasks = [{
    id: 1,
    name: 'biceps',
    progress: 60,
    img: 'https://img.icons8.com/wired/64/000000/flex-biceps.png',
  }];
  return (
    <div>
      <div>
        <Date />
        <Progress show={3} />
      </div>
      <div className="bg-tasks">

        <div className="row p-3">
          {tasks.map(todo => (
            <Task
              key={todo.id}
              task={todo}
            />
          ))}
        </div>

      </div>
    </div>
  );
};
export default Tasks;
