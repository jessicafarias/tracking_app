import '../styles/carousel.css';
import React from 'react';
import Carousel from 'react-elastic-carousel';

const Date = () => {
  const state = {
    items: [
      { id: 1, title: '7 september 2013' },
      { id: 2, title: '8 september 2013' },
      { id: 3, title: '9 september 2013' },
      { id: 4, title: '10 september 2013' },
      { id: 5, title: '11 september 2013' },
    ],
  };

  const { items } = state;

  return (
    <div className="pt-4">
      <Carousel itemsToShow={1}>
        {items.map(item => (
          <div
            key={item.id}
            className="font-md"
          >
            {item.title}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Date;
