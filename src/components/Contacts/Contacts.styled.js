import styled from 'styled-components';

export const Number = styled.p`
  margin-top: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};
`;

export const ContactsList = styled.ul`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin: 30px auto 0;
  max-width: 500px;
  max-height: 70vh;
  overflow: auto;
  border: ${p => p.theme.borders.m};
  border-color: ${p => p.theme.colors.bgSecondary};
  border-radius: ${p => p.theme.radii.md};
`;

export const ContactCard = styled.li`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.m};
  border-color: inherit;
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p =>
    p.index % 2 === 0 ? p.theme.colors.bgPrimary : p.theme.colors.bgSecondary};
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.46);

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }

  &:hover,
  :focus {
    border: ${p => p.theme.borders.m};
    border-color: ${p => p.theme.colors.accent};
  }
`;
