import '../styles/carousel.css';
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import '../styles/progress.css';

const Progress = ({ show }) => {
  const state = {
    items: [
      { id: 1, title: 'Css module' },
      { id: 2, title: 'html module' },
      { id: 3, title: 'Ror module' },
      { id: 4, title: 'c# module' },
      { id: 5, title: 'Help sister' },
    ],
  };

  const { items } = state;

  return (
    <div id="big">
      <Carousel itemsToShow={show}>
        {items.map(item => (
          <div key={item.id} className="big">
            <div className="d-flex justify-content-center align-items-center">
              <svg viewBox="0 0 36 36" className="circular-chart blue p-3">
                <path
                  className="circle-bg w-100"
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle w-100"
              // strokeDasharray={`${book.percentage} ,100`}
                  strokeDasharray="50,100"
                  d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
            <p className="text-center">{item.title}</p>

          </div>
        ))}
      </Carousel>
    </div>
  );
};

Progress.propTypes = {
  show: PropTypes.number.isRequired,
};

export default Progress;
