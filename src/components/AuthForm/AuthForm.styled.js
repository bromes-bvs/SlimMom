import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 32px;
  }
`;
