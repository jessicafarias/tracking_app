import '../styles/date.css';
import Day from './Day';

const ListDates = () => (
  <div>
    <p className="day-tag">Today</p>
    <Day />
    <p className="day-tag">Yesterday</p>
    <Day />
    <p className="day-tag">Last Week</p>
    <Day />
    <Day />
    <Day />
    <Day />
    <Day />
    <Day />
    <Day />
  </div>
);

export default ListDates;
