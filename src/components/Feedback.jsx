import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
// import styles from './section.module.css';
import { Wrapper } from './Feedback.styled';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (propertyName, key) => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(propTypes) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const valuePositive = this.state.good;
    const result = (valuePositive / total) * 100;
    return Number(result.toFixed(0));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage('good');
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            leaveFeedback={this.leaveFeedback}
            state={this.state}
          />
        </Section>
        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercent={positivePercent}
            />
          )}
        </Section>
      </Wrapper>
    );
  }
}
