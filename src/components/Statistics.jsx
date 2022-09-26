import React from 'react';
import PropTypes from 'prop-types';
import { StatisticList, StatisticItem } from './Feedback.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercent,
}) {
  return (
    <div>
      <StatisticList>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
        <StatisticItem>Total: {total}</StatisticItem>
        <StatisticItem>Positive feedback: {positivePercent}%</StatisticItem>
      </StatisticList>
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
