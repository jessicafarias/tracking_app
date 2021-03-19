import '../styles/carousel.css';
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import '../styles/progress.css';

const Progress = ({ items }) => (
  <div id="big">
    <Carousel itemsToShow={3}>
      {items.map(item => (
        <div key={item.id} className="w-100 sizeprogress">
          <div className="d-flex justify-content-center align-items-center w-100">
            <svg viewBox="0 0 36 36" className="circular-chart blue pl-3 pr-3 pb-2">
              <path
                className="circle-bg w-100"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle w-100"
                strokeDasharray={`${item.progress} ,100`}
                d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="19" className="percentage">{`${item.progress}`}</text>
              <text x="18" y="25.35" className="subpercentaje">{`(${item.time}hrs)`}</text>
            </svg>
          </div>
          <p className="text-center font-xs">{item.name}</p>

        </div>
      ))}
    </Carousel>
  </div>
);

Progress.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    time: PropTypes.number,
    progress: PropTypes.number,
  })).isRequired,
};

export default Progress;
