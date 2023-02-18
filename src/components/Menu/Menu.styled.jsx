import { Menu } from '@mui/material';
import styled from 'styled-components';

export const MenuStyled = styled(Menu)`
  & .MuiPaper-root.MuiPaper-elevation.MuiPopover-paper {
    box-shadow: none;
    background-color: inherit;
    top: 10vh !important;
    left: 30vw !important;
    @media screen and (min-width: 768px) {
      top: 20vh !important;
      left: 40vw !important;
    }
  }

  .MuiList-root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
