import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react';
import { useState } from 'react';
import reactDom from 'react-dom';
import Images from '../assets/img';
import NoticeError from '../components/NoticeError';
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
        img: event.target.firstChild.src.toString(),
        goal: task.goal,
        time: task.time,
      });
    }
    console.log(task);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(task);

    if (localStorage.getItem('token') !== null) {
      createTaskRequest(task).then(response => {
        console.log(response);
        if (response.status === 'error') {
          reactDom.render(
            <NoticeError message="Please log in to admin your tasks" />,
            document.getElementById('notice').appendChild(document.createElement('DIV')),
          );
        }
      });
    } else {
      reactDom.render(
        <NoticeError message="Please log in to create a new task" />,
        document.getElementById('notice').appendChild(document.createElement('DIV')),
      );
    }
  };
  return (
    <div>
      <form className="d-flex flex-column align-items-center justify-content-center">
        <p className="w-100 text-center mt-5">ADD NEW TASK TO DO</p>
        <div className="p-4">
          <label htmlFor="title" className="w-100">
            <input placeholder="Task (short keyword)" className="w-100" type="name" id="name" name="name" onChange={handleState} value={task.title} />
          </label>

          <Dropdown
            id="drop"
            name="drop"
            placeholder="Choose an image"
            fluid
            selection
            className="mt-2"
            options={Images}
            onChange={handleState}
          />
          <label htmlFor="Hours" className="w-100">
            <input placeholder="Hours" className="w-100 mt-2" type="number" id="hours" name="hours" onChange={handleState} value={task.hours} />
          </label>

          <label htmlFor="Goal" className="w-100">
            <input placeholder="Goal hours" className="w-100 mt-2 mb-2" type="number" id="goal" name="goal" onChange={handleState} value={task.goal} />
          </label>

          <div className="m-auto w-100 pt-3 pb-3">
            <button className="ui twitter button w-100" type="submit" onClick={handleSubmit}> Create task</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default TaskForm;
