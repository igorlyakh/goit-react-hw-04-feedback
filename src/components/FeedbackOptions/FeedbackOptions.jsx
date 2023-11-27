import Button from 'components/Button';
import React from 'react';

const FeedbackOptions = ({ keys, clickHandler }) => {
  return (
    <div>
      {keys.map(item => {
        return <Button clickHandler={clickHandler} key={item} text={item} />;
      })}
    </div>
  );
};

export default FeedbackOptions;
