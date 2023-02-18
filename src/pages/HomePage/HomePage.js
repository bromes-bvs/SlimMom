import { BgImg } from 'components/Main/backGround.styled';
import Home from 'components/Main/Main';
import { StyledContainer } from 'components/Main/Main.styled';

const HomePage = () => {
  return (
    <StyledContainer>
      <BgImg />
      <Home />
    </StyledContainer>
  );
};

export default HomePage;
