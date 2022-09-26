import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, Button } from './Feedback.styled';

export default function FeedbackOptions({ leaveFeedback }) {
  return (
    <ButtonWrapper>
      <Button onClick={() => leaveFeedback('good')}>Good</Button>
      <Button onClick={() => leaveFeedback('neutral')}>Neutral</Button>
      <Button onClick={() => leaveFeedback('bad')}>Bed</Button>
    </ButtonWrapper>
  );
}

FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
};
