import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const messageStyles = css`
  background: ${THEME.messageColor};
  color: ${THEME.messageTextColor};
  border-radius: 4px;
  margin-top: 15px;
  font-size: ${THEME.labelFontSize};
  padding: 20px;
  text-align: center;
  opacity: 0.7;
`;

export const phoneMessageStyles = css`
  margin-top: 10px;
  font-size: ${THEME.phonelabelFontSize};
  padding: 14px;
`;

export const tabletMessageStyles = css`
  margin-top: 12px;
  font-size: ${THEME.tabletlabelFontSize};
  padding: 18px;
`;

export const errorMessageStyles = css`
  background: ${THEME.errorMessageColor};
  color: ${THEME.errorMessageTextColor};
`;
