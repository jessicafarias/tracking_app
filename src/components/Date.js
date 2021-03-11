import '../styles/carousel.css';
import React from 'react';
import Carousel from 'react-elastic-carousel';

const Date = () => {
  const state = {
    items: [
      { id: 1, title: '7 Sep 2013' },
      { id: 2, title: '8 Sep 2013' },
      { id: 3, title: '9 Sep 2013' },
      { id: 4, title: '10 Sep 2013' },
      { id: 5, title: '11 Sep 2013' },
    ],
  };

  const { items } = state;

  return (
    <div className="pt-4">
      <Carousel itemsToShow={1}>
        {items.map(item => <div key={item.id}>{item.title}</div>)}
      </Carousel>
    </div>
  );
};

export default Date;
