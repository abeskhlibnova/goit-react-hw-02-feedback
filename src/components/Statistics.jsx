import React from 'react';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercent,
}) {
  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercent}%</li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};
