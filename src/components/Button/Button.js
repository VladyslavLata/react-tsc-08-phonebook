import * as SC from './Button.styled';

export const Button = ({
  margin = 0,
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
