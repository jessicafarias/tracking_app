import '../styles/carousel.css';
import React, { useEffect, useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getTasks from '../requests/getTasks';
import { fetchDatesAction } from '../actions';

const ComponentDate = ({
  items, get, setCurrentDate, currentDate,
}) => {
  const List = items;
  let carousel = useRef(null);
  useEffect(() => {
    if (!(localStorage.getItem('token') === true || localStorage.getItem('token') === false)) {
      getTasks('dates').then(response => {
        if (response.error === 'Access token is missing in the request'
        || response.error === 'Invalid access token') {
          window.location.assign('/login');
        } else {
          const index = response.map(
            e => new Date(e.expiration_day.replaceAll('-', '/')).toDateString(),
          ).indexOf(new Date().toDateString());

          if (index === -1) {
            carousel.goTo(response.length);
          } else {
            carousel.goTo(index);
          }
          get(response);
        }
      });
    }
    console.log(currentDate);
  }, []);

  return (
    <div className="pt-4">
      <Carousel
        itemsToShow={1}
        ref={ref => {
          carousel = ref;
        }}
        onNextEnd={
          selectedDay => setCurrentDate(new Date(selectedDay.item.children).toLocaleString('en-GB').slice(0, 10).replaceAll('/', '-'))
        }
        onPrevEnd={
          selectedDay => setCurrentDate(new Date(selectedDay.item.children).toLocaleString('en-GB').slice(0, 10).replaceAll('/', '-'))
        }
      >
        {List.map(item => (
          <div
            key={item.expiration_day}
            className="font-sm"
          >
            {item.expiration_day}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.dates,
});

const mapDispatchToProps = dispatch => ({
  get: items => {
    dispatch(fetchDatesAction(items));
  },
});

ComponentDate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    expiration_day: PropTypes.string,
  })).isRequired,
  get: PropTypes.func.isRequired,
  setCurrentDate: PropTypes.func.isRequired,
  currentDate: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentDate);
