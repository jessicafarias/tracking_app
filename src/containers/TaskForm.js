import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react';
import Images from '../assets/img';
import createTaskRequest from '../requests/createTaskRequest';

const TaskForm = () => {
  const [task, setTask] = useState({
    name: '',
    img: '',
    goal: 0,
    time: 0,
  });

  const handleState = event => {
    event.preventDefault();
    if (event.target.id !== '') {
      switch (event.target.name) {
        case 'name':
          setTask({
            name: event.target.value,
            img: task.img,
            goal: task.goal,
            time: task.time,
          });
          break;
        case 'hours':
          setTask({
            name: task.name,
            img: task.img,
            goal: task.goal,
            time: event.target.value,
          });
          break;
        case 'goal':
          setTask({
            name: task.name,
            img: task.img,
            goal: event.target.value,
            time: task.time,
          });
          break;
        default:
          break;
      }
    } else {
      setTask({
        name: task.name,
        img: event.target.firstChild.src,
        goal: task.goal,
        time: task.time,
      });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newTask = {
      name: task.name,
      img: task.img,
      goal: task.goal,
      time: task.time,
    };

    createTaskRequest(newTask).then(response => {
      console.log('response', response);
    });
  };
  return (
    <div>
      <form>
        <p className="w-100 text-center">ADD NEW TASK TO DO</p>
        <div>
          <label htmlFor="title">
            <input placeholder="Task (short keyword)" type="name" id="name" name="name" onChange={handleState} value={task.title} />
          </label>

          <Dropdown
            id="drop"
            name="drop"
            placeholder="Select Friend"
            fluid
            selection
            options={Images}
            onChange={handleState}
          />
          <label htmlFor="Hours">
            <input placeholder="Hours" type="number" id="hours" name="hours" onChange={handleState} value={task.hours} />
          </label>
          <label htmlFor="Goal">
            <input placeholder="Goal hours" type="number" id="goal" name="goal" onChange={handleState} value={task.goal} />
          </label>

          <div>
            <button type="submit" onClick={handleSubmit}> ADD TASK </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default TaskForm;
