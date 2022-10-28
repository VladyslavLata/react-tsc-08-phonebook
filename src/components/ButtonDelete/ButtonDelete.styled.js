import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  background-color: ${p => {
    if (!p.index) {
      return p.theme.colors.bgSecondary;
    }
    return p.index % 2 === 0
      ? p.theme.colors.bgSecondary
      : p.theme.colors.bgPrimary;
  }};
  cursor: pointer;

  &:active {
    box-shadow: none;
  }

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }

  & svg {
    width: 24px;
    height: 24px;
  }
`;
