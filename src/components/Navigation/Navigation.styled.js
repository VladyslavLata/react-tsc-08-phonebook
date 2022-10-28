import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  position: relative;
  color: ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[2]}px 0;
  transform: scale(0);

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 5px;
    background-color: ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.sm};
    transform: scaleX(0);
    transition: transform 200ms ease-out;
  }

  &.active::after,
  &:hover:not(.active)::after,
  &:active {
    transform: scaleX(1);
  }
`;

export const Item = styled.li``;
