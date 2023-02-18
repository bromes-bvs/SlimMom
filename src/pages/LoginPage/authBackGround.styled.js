import styled from 'styled-components';
import desktopMainBg from '../../assets/images/backroundImage/desktopMainBg-min.png';
import tabletMainBg from '../../assets/images/backroundImage/authBackground1x-min.png';
import deskTopMainBg2x from '../../assets/images/backroundImage/desktopMainBg@2x-min.png';
import tabletMainBg2x from '../../assets/images/backroundImage/authBackground2x-min.png';

export const authBgImg = styled.div`
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;

    width: 768px;
    height: 1024px;

    background-image: url(${tabletMainBg});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabletMainBg2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${desktopMainBg});
    width: 1280px;
    height: 850px;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${deskTopMainBg2x});
    }
  }
`;
