import styled from 'styled-components';
import CustomLoader from './DairyLoader';

export const CustomLoaderStyled = styled(CustomLoader)`
  margin-top: 30px;
  width: 670px;
  height: 280px;

  @media screen and (max-width: 767px) {
    width: 290px;
    height: 130px;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 142px;
  }
`;
