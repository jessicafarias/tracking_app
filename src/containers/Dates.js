import PropTypes from 'prop-types';
import { useEffect } from 'react';
import reactDom from 'react-dom';
import { connect } from 'react-redux';
import { todayTasksAction, yesterdayTasksAction } from '../actions';
import ListDates from '../components/ListDates';
import NoticeError from '../components/NoticeError';
import getTasks from '../requests/getTasks';

const Dates = ({
  today, updatetoday, yesterday, updateYesterday,
}) => {
  const tasks = [];

  useEffect(() => {
    if (!(localStorage.getItem('token') === true || localStorage.getItem('token') === false)) {
      getTasks('today').then(response => {
        if (response.error === 'Access token is missing in the request'
        || response.error === 'Invalid access token') {
          window.location.assign('/login');
        } else {
          if (response.length === 0) {
            reactDom.render(
              <NoticeError message="You don't have any task for today" />,
              document.getElementById('notice').appendChild(document.createElement('DIV')),
            );
          }
          console.log('entro a yesterday');
          updatetoday(response);
        }
      });

      getTasks('yesterday').then(response => {
        if (response.error === 'Access token is missing in the request'
        || response.error === 'Invalid access token') {
          window.location.assign('/login');
        } else {
          updateYesterday(response);
        }
      });
    }
  }, []);

  return (
    <div>
      <ListDates when="Today" tasks={today} />
      <ListDates when="Yesterday" tasks={yesterday} />
      <ListDates when="Last week" tasks={tasks} />

    </div>
  );
};

const mapStateToProps = state => ({
  today: state.today,
  yesterday: state.yesterday,
});

Dates.propTypes = {
  today: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    goal: PropTypes.number,
    time: PropTypes.number,
    progress: PropTypes.number,
    expiration_day: PropTypes.string,
  })).isRequired,
  yesterday: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    goal: PropTypes.number,
    time: PropTypes.number,
    progress: PropTypes.number,
    expiration_day: PropTypes.string,
  })).isRequired,
  updatetoday: PropTypes.func.isRequired,
  updateYesterday: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updatetoday: tasks => {
    dispatch(todayTasksAction(tasks));
  },
  updateYesterday: tasks => {
    dispatch(yesterdayTasksAction(tasks));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dates);
