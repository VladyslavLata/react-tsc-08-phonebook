import * as SC from './ButtonIcon.styled';

export const ButtonIcon = ({ size, position, onClick, children }) => {
  return (
    <SC.Button size={size} position={position} onClick={() => onClick()}>
      {children}
    </SC.Button>
  );
};
