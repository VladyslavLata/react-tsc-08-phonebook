import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 32px;
  right: 32px;
  display: flex;
  z-index: 1;
  justify-content: space-between;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  border-bottom: ${p => p.theme.borders.m};
  border-color: ${p => p.theme.colors.bgSecondary};
  background-color: ${p => p.theme.colors.bgPrimary};
`;
