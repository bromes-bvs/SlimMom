import { createPortal } from 'react-dom';
import { RingLoader } from 'react-spinners';
import { WrapperLoader } from './LoaderSuspense.styled';
const loaderRootRef = document.querySelector('#loader-root');

const LoaderSuspense = () => {
  return createPortal(
    <WrapperLoader>
      <RingLoader color="#fa8950" size={90} />
    </WrapperLoader>,
    loaderRootRef
  );
};

export default LoaderSuspense;
