import styled from 'styled-components';
import desktopMainBg from '../../assets/images/backroundImage/desktopMainBg-min.png';
import tabletMainBg from '../../assets/images/backroundImage/tabletMainBg-min.png';
import deskTopMainBg2x from '../../assets/images/backroundImage/desktopMainBg@2x-min.png';
import tabletMainBg2x from '../../assets/images/backroundImage/tabletMainBg@2x-min.png';

export const BgImg = styled.div`
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 100vw;
    height: 100vh;

    background-image: url(${tabletMainBg});

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabletMainBg2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${desktopMainBg});

    width: 100vw;
    height: 100vh;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${deskTopMainBg2x});
    }
  }
`;
