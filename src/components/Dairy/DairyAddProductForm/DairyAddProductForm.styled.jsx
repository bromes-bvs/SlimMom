import { Fab, IconButton, TextField } from '@mui/material';

import styled from 'styled-components';

export const FabStyled = styled(Fab)`
  &.MuiFab-root {
    background-color: #fc842d;
    color: #fff;
    margin-left: 30px;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media screen and (max-width: 767px) {
      margin: 0 auto;
      margin-top: 30px;
      width: 48px;
      height: 48px;
    }

    &:hover {
      background-color: #fc2d2d;
    }

    &:disabled {
      background-color: grey;
      box-shadow: none;
    }
  }
`;

export const FieldStyled = styled(TextField)`
  &.MuiTextField-root {
    margin: 0 24px;
    width: 240px;
    background-color: transparent;

    @media screen and (max-width: 767px) {
      width: 280px;
      margin: 0;
      margin-top: 61px;
    }

    .MuiInputBase-root {
      background-color: white;

      ::before {
        border-color: #e0e0e0;
      }
    }
  }
`;
export const FormStyled = styled.form`
  align-items: center;
  display: flex;
  position: relative;

  &.afterInvisible {
    ::after {
      display: none;
    }
  }

  ::after {
    left: 0;
    bottom: -345px;
    content: '';
    position: absolute;
    right: 0;
    width: 100%;
    pointer-events: none;
    z-index: 1;
    height: 50px;
    background: linear-gradient(
      180deg,
      rgb(255 255 255 / 23%) 0%,
      #ffffff 42.19%
    );
    @media screen and (max-width: 767px) {
      bottom: 53px;
    }
  }

  div.wrapper {
    display: block;
    @media screen and (max-width: 767px) {
      display: none;
      min-height: 450px;
    }
  }

  .MuiInputLabel-root {
    color: #9b9faa;
    font-weight: 700;
    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
`;

export const IconStyled = styled(IconButton)`
  &.MuiButtonBase-root {
    @media screen and (max-width: 767px) {
      position: absolute;
      top: 83px;
      left: -15px;
      z-index: 1;
      width: 40px;
      display: none;
    }
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
