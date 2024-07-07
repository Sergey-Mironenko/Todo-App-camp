import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const AppStyles = css`
  font-family: ${THEME.fontFamily};
  font-weight: ${THEME.primaryFontWeight};
  font-optical-sizing: auto;
  font-style: normal;
  color: ${THEME.primaryTextColor};
  background: ${THEME.baсkgroundColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
