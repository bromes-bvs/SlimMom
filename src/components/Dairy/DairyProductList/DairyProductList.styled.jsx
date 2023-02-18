import { List } from '@mui/material';

import styled from 'styled-components';

export const ListStyled = styled(List)`
  ::-webkit-scrollbar {
    width: 6px;
    background: #f0f1f3;
  }
  ::-webkit-scrollbar-track {
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #264061;
    border-radius: 6px;
  }

  &.MuiList-root {
    margin-top: 44px;
    padding: 0;
    position: relative;
    overflow: auto;
    @media screen and (max-width: 767px) {
      margin-top: 12px;
    }
  }
`;

export const MessageStyled = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  font-family: 'Verdana';
  color: #070730a7;
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 44px;
  margin-bottom: 0;
  height: 271px;
  width: 550px;
  @media screen and (max-width: 767px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.1;
    width: 270px;
    height: 257px;
    margin: 0 auto;
    margin-top: 35px;
  }
`;
