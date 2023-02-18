import styled from '@emotion/styled';
import { BgWrapper } from 'assets/styles/AuthPages.styled';
import { Link } from 'react-router-dom';
import BgImgAuthM from 'assets/images/auth/auth-bg-tabl-1x.png';

export const NotFoundWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const LinkBack = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 24px;
  color: #fc842d;
  transition: transform 250ms ease-in-out;

  :hover,
  :focus {
    transform: scale3d(1.1, 1.1, 1.1);
    font-weight: 700;
  }
`;

export const NotFoundBg = styled(BgWrapper)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  background-image: url(${BgImgAuthM});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom;
`;
