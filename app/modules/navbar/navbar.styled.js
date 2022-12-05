import styled, { css } from 'styled-components';
import { desktopQuery, mobileQuery } from '../../utils/responsive.utils';
import { UI } from '../../theme';

export const StyledNavbar = styled.nav`
  display: flex;
  width: 100%;
  height: ${UI.NAVBAR.HEIGHT.MOBILE};
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.BACKGROUND_DARKER};
  color: ${(props) => props.theme.PRIMARY};
  ${mobileQuery(
    css`
      position: absolute;
      bottom: 0;
    `,
  )}
  ${desktopQuery(
    css`
      height: ${UI.NAVBAR.HEIGHT.DESKTOP};
    `,
  )}
`;
