import { RotatingLines } from 'react-loader-spinner';
import { SpinnerWrap } from './Spinner.styled';

interface IProps {
  loading: boolean,
  size: string,
}

export const Spinner: React.FC<IProps> = ({ loading, size }) => {
  return (
    <SpinnerWrap>
      <RotatingLines
        strokeColor="#ffffff"
        strokeWidth="5"
        animationDuration="0.75"
        width={size}
        visible={loading}
      />
    </SpinnerWrap>
  );
};
