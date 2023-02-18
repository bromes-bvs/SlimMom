import bgid1x from '../../assets/images/backroundImage/desktoprightSideBar-min.png';
import bgid2x from '../../assets/images/backroundImage/desktoprightSideBar.png';
import bgit1x from '../../assets/images/backroundImage/sidebarTablet1x-min.png';
import bgit2x from '../../assets/images/backroundImage/sidebarTablet2x-min.png';
import styled from 'styled-components';

export const SideBarRight = styled.div`
  background-color: #f0f1f3;
  color: #9b9faa;
  padding-bottom: 40px;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    width: 768px;
    background-repeat: no-repeat;
    background-size: contain;
    font-family: Verdana;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.04em;
    background-image: url(${bgit1x});
    background-position: 106% 100%;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgit2x});
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-left: auto;
    margin-right: auto;
    padding-top: 70px;
    padding-bottom: 17px;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${bgid1x});
    width: 100vw;
    height: 100vh;
    padding-bottom: 0px;
    padding-top: 0px;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgid2x});
    }
  }
`;
export const WrapperFilter = styled.div`
  margin: 0 auto;
  max-width: 280px;
  max-height: 70px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    max-width: 380px;
  }
`;
