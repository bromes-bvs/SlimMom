import { Box } from '@mui/material';
import styled from 'styled-components';
export const StyledItem = styled.li`
  margin-bottom: 14px;
  & span,
  ::marker {
    color: #9b9faa;
    font-family: 'Verdana';
    font-size: 14px;
    line-height: 1.2;
    margin-right: 2px;
  }
`;
export const BoxStyled = styled(Box)`
  position: absolute;
  top: 14.4%;
  width: 100vw;
  max-height: 656px;
  padding: 40px 0px 119px;

  @media screen and (min-width: 768px) {
    width: 672px;
    height: 572px;
    padding: 64px 154px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
  @media screen and (min-width: 1280px) {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  background-color: white;
`;
