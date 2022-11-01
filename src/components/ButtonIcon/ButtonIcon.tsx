import * as SC from './ButtonIcon.styled';

interface IProps {
  size: string;
  position: string[];
  onClick: () => void;
  children: React.ReactNode;
}

export const ButtonIcon: React.FC<IProps> = ({
  size,
  position,
  onClick,
  children,
}) => {
  return (
    <SC.Button size={size} position={position} onClick={() => onClick()}>
      {children}
    </SC.Button>
  );
};
