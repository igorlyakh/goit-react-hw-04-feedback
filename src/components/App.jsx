import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

// import React from 'react';

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

  const total = getTotal();
  const percent = getPercent();

  return (
    <>
      <h2>Pleader leave feedback</h2>
      <FeedbackOptions onGood={setGood} onNeutral={setNeutral} onBad={setBad} />
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
