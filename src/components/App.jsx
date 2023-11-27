import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getTotal = () => {
    return good + neutral + bad;
  };
  const getPercent = () => {
    const total = getTotal();
    return (good / total) * 100;
  };

  const clickHandler = option => {
    console.log(option);
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        setBad(prev => prev + 1);
        break;
    }
  };

  const total = getTotal();
  const percent = getPercent();

  const keys = ['good', 'neutral', 'bad'];

  return (
    <>
      <h2>Pleader leave feedback</h2>
      <FeedbackOptions keys={keys} clickHandler={clickHandler} />
      <h2>Statistics</h2>
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percent={percent}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
