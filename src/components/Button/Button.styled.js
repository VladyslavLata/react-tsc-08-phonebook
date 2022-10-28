import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.margin};
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.colors.bgSecondary};
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.46);
  border: ${p => p.theme.borders.none};
  cursor: pointer;

  &:active {
    box-shadow: none;
  }

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
