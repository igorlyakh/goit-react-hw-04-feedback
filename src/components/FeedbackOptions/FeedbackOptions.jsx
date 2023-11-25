import Button from 'components/Button';
import React from 'react';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <Button onUpdate={() => onGood(prev => prev + 1)} text="Good" />
      <Button onUpdate={() => onNeutral(prev => prev + 1)} text="Neutral" />
      <Button onUpdate={() => onBad(prev => prev + 1)} text="Bad" />
    </div>
  );
};

export default FeedbackOptions;
