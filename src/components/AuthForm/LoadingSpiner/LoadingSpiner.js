import { BeatLoader } from 'react-spinners';

const LoadingSpiner = ({ color = '#ffffff', size = 12 }) => {
  return <BeatLoader color={color} size={size} />;
};

export default LoadingSpiner;
