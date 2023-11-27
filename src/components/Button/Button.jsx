import React from 'react';
import { ButtonReview } from './Button.styled';

const Button = ({ text, clickHandler }) => {
  return <ButtonReview onClick={() => clickHandler(text)}>{text}</ButtonReview>;
};

export default Button;
