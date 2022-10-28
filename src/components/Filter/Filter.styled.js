import styled from 'styled-components';

export const FilterHeader = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[0]} ${p => p.theme.space[3]}px;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.m};
  border-radius: ${p => p.theme.radii.sm};
  border-color: ${p => p.theme.colors.bgSecondary};

  &:focus-within {
    border-color: ${p => p.theme.colors.accent};
  }
`;

export const InputWrap = styled.div`
  margin: 0 auto;
  max-width: 400px;
`;
