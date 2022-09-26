import React from 'react';
import PropTypes from 'prop-types';
import { NotificationMessage } from './Feedback.styled';

export default function Notification({ message }) {
  return (
    <div>
      <NotificationMessage>{message}</NotificationMessage>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
