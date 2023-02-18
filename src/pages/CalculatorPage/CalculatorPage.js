import { Stack } from '@mui/material';
import Home from 'components/Main/Main';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';

const CalculatorPage = () => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'column', lg: 'row' }}
      sx={{ pl: { lg: '16px' } }}
    >
      <Home />
      <RightSideBar />
    </Stack>
  );
};
export default CalculatorPage;
