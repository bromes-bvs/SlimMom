import { styled, TextField } from '@mui/material';

export const InputStyled = styled(TextField)`
  width: 280px;

  label,
  input {
    font-family: Verdana, sans-serif;
    line-height: 1.21;
    letter-spacing: 0.04em;
  }

  label {
    font-weight: 700;
    font-size: 14px;
    color: #9b9faa;
  }

  input {
    font-size: 16px;
    color: #212121;
  }

  &::after {
    border-bottom: 2px solid #e0e0e0;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;
