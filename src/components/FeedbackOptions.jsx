import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, Button } from './Feedback.styled';

export default function FeedbackOptions({ leaveFeedback, state }) {
  return (
    <ButtonWrapper>
      {Object.keys(state).map(key => (
        <Button key={key} onClick={() => leaveFeedback(key)}>
          {key}
        </Button>
      ))}
    </ButtonWrapper>
  );
}

FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
};
