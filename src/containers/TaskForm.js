import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react';
import Images from '../assets/img';

const TaskForm = () => (
  <div>
    <form>
      <p>ADD NEW TASK TO DO</p>
      <div>
        <label htmlFor="title">
          <input placeholder="Key word" type="name" id="name" name="name" />
        </label>

        <Dropdown
          placeholder="Select Friend"
          fluid
          selection
          options={Images}
        />
        <label htmlFor="Hours">
          <input placeholder="Hours" type="hours" id="hours" name="hours" />
        </label>
        <label htmlFor="Goal">
          <input placeholder="Goal hours" type="goal" id="goal" name="goal" />
        </label>

        <div>
          <button type="submit"> ADD TASK </button>
        </div>
      </div>
    </form>
  </div>
);

export default TaskForm;
