import '../styles/carousel.css';
import React, { useEffect } from 'react';
import reactDom from 'react-dom';
import Carousel from 'react-elastic-carousel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getTasks from '../requests/getTasks';
import NoticeError from './NoticeError';
import { fetchDatesAction } from '../actions';

const ComponentDate = ({ items, get }) => {
  const List = items;
  useEffect(() => {
    if (!(localStorage.getItem('token') === true || localStorage.getItem('token') === false)) {
      getTasks('dates').then(response => {
        if (response.error === 'Access token is missing in the request'
        || response.error === 'Invalid access token') {
          window.location.assign('/login');
        } else if (response.length === 0) {
          reactDom.render(
            <NoticeError message="You don't have any task created" />,
            document.getElementById('notice').appendChild(document.createElement('DIV')),
          );
        } else {
          get(response);
        }
      });
    }
  }, []);

  return (
    <div className="pt-4">
      <Carousel itemsToShow={1}>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentDate);
