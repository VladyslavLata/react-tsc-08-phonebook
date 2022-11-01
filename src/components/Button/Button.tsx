import * as SC from './Button.styled';

interface IProps {
  margin?: string,
  disabled?: boolean,
  type?: "submit" | "button" | "reset" | undefined,
  onClick?: (e: React.MouseEvent<HTMLButtonElement> )=> void,
  children: React.ReactNode,
}

export const Button: React.FC <IProps> = ({
  margin = "0",
  disabled = false,
  type = 'submit',
  onClick,
  children,
}) => {
  return (
    <SC.Button
      margin={margin}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </SC.Button>
  );
};
