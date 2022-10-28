import { BiUser } from 'react-icons/bi/index';
import styled from 'styled-components';

export const UserIcon = styled(BiUser)`
  margin-left: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.accent};
  width: 24px;
  height: 24px;
`;
