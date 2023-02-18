import styled from '@emotion/styled';

export const WrapperSwitcher = styled.div`
  position: absolute;
  top: 77px;
  left: 35px;
  display: flex;
  align-items: center;
  min-height: 45px;

  @media screen and (min-width: 768px) {
    left: 60px;
  }

  @media screen and (min-width: 1280px) {
    top: 160px;
    left: 80px;
  }
`;

export const BtnWrapper = styled.div`
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ActiveBtn = styled.button`
  padding: 0;
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  transform: scale3d(1.2, 1.2, 1.2);
  box-shadow: 5px 5px 5px rgba(238, 222, 206, 0.829);

  &.noActive {
    border: none;
    padding: 0;

    width: 20px;
    height: 20px;
    cursor: pointer;
    transform: scale3d(1, 1, 1);
    transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;
  }

  img {
    width: 100%;
    height: 100%;
  }

  :hover {
    transform: scale3d(1.2, 1.2, 1.2);
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  }
`;
