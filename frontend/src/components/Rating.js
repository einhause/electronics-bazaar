import React from 'react';
import PropTypes from 'prop-types';

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Rating = ({ value, text, color = 'yellow' }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {value >= index + 1 ? (
          <BsStarFill style={{ color: color }} />
        ) : value >= index + 0.5 ? (
          <BsStarHalf style={{ color: color }} />
        ) : (
          <BsStar style={{ color: color }} />
        )}
      </span>
    );
  });

  return (
    <div className='rating'>
      {stars}
      <span>{text && text}</span>
    </div>
  );
};

Rating.prototype = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
