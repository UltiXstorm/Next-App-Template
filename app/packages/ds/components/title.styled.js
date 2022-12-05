import styled, { css } from 'styled-components';
import { desktopQuery } from '../../../utils/responsive.utils';

export const Title1 = styled.h1`
  justify-content: center;

  ${desktopQuery(
    css`
      margin-bottom: 20px;
    `,
  )}
`;
