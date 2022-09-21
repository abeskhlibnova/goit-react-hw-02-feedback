import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.module.css';

export default function FeedbackOptions({ leaveFeedback }) {
  return (
    <div className={styles.element}>
      <button onClick={() => leaveFeedback('good')}>Good</button>
      <button onClick={() => leaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => leaveFeedback('bad')}>Bed</button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
};
