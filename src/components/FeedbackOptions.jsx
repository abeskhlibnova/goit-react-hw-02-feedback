import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, Button } from './Feedback.styled';

export default function FeedbackOptions({ leaveFeedback, keys }) {
  return (
    <ButtonWrapper>
      {keys.map(key => (
        <Button key={key} onClick={() => leaveFeedback(key)}>
          {key}
        </Button>
      ))}
    </ButtonWrapper>
  );
}

FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
  keys: PropTypes.arrayOf(PropTypes.string.isRequired),
};
