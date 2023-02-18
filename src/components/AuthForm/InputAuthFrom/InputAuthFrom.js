import React from 'react';
import { InputStyled } from './InputAuthFrom.styled';

const InputAuthFrom = ({ onChange, value, ...otherProps }) => {
  return (
    <InputStyled
      required
      variant="standard"
      value={value}
      onChange={onChange}
      {...otherProps}
    />
  );
};

export default InputAuthFrom;
