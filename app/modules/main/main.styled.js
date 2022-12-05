import styled, { css } from 'styled-components';
import { desktopQuery, mobileQuery } from '../../utils/responsive.utils';
import { UI } from '../../theme';

export const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.BACKGROUND};
  color: ${(props) => props.theme.PARAGRAPH};
  ${mobileQuery(
    css`
      margin-bottom: ${UI.NAVBAR.HEIGHT.MOBILE};
      height: calc(100vh - ${UI.NAVBAR.HEIGHT.MOBILE});
    `,
  )}
  ${desktopQuery(css`
    height: calc(100vh - ${UI.NAVBAR.HEIGHT.DESKTOP});
  `)}
  h1, h2, h3, h4, h5 {
    color: ${(props) => props.theme.PRIMARY};
  }
`;
