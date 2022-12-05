import { css } from 'styled-components';

export const mobileQuery = (dictionaryCss) =>
  css`
    @media (max-width: 449px) {
      ${dictionaryCss}
    }
  `;

export const desktopQuery = (dictionaryCss) =>
  css`
    @media (min-width: 450px) {
      ${dictionaryCss}
    }
  `;
