const { NavLink } = require('react-router-dom');
const { default: styled } = require('styled-components');

export const NavLinkAuth = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  text-align: right;
  color: #9b9faa;
  font-family: 'Verdana';
  font-style: normal;

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fc842d;
    background-color: inherit;
  }
  &.active {
    color: #212121;
  }
`;

export const NavLinkMenu = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  text-align: right;
  color: #9b9faa;
  font-family: 'Verdana';
  font-style: normal;

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fc842d;
    background-color: inherit;
  }
  &.active {
    color: #212121;
  }

  @media screen and (max-width: 1199px) {
    &.active {
      color: white;
    }
    font-size: 24px;
    margin-top: 40px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.22;
  }
`;
