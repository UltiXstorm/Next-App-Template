import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { desktopQuery } from '../../../utils/responsive.utils';
import { UI } from '../../../theme';

export const NavItem = styled(NavLink)`
  display: flex;
  min-height: ${UI.NAVITEM.HEIGHT.MOBILE};
  min-width: ${UI.NAVITEM.WIDTH.MOBILE};
  color: inherit;
  margin: 0 5px;
  border-radius: 15px;

  justify-content: center;
  align-items: center;

  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme.BACKGROUND};
    cursor: pointer;
  }
  ${desktopQuery(
    css`
      min-height: ${UI.NAVITEM.HEIGHT.DESKTOP};
      min-width: ${UI.NAVITEM.WIDTH.DESKTOP};
      margin: 0 20px;
    `,
  )}
`;
