import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const containerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 0;
`;

export const rowContainerStyles = css`
  flex-direction: row;
  gap: 10px;
  margin-bottom: 30px;
`;

export const labelStyles = css`
  font-size: ${THEME.labelFontSize};
  font-weight: 500;
  margin-bottom: 8px;
`;

export const tabletLabelStyles = css`
  font-size: ${THEME.tabletlabelFontSize};
  margin-bottom: 6px;
`;

export const phoneLabelStyles = css`
  font-size: ${THEME.phonelabelFontSize};
  margin-bottom: 4px;
`;

export const inputStyles = css`
  margin-bottom: 30px;
  font-size: ${THEME.labelFontSize};
  font-family: ${THEME.fontFamily};
  font-weight: 600;
  color: ${THEME.secondaryTextColor};
  border: 2px solid ${THEME.borderColor};
  border-radius: 3px;
  padding: 2px 5px;
`;

export const phoneInputStyles = css`
  font-size: ${THEME.phonelabelFontSize};
  padding: 1px 2px;
`;

export const tabletInputStyles = css`
  font-size: ${THEME.tabletlabelFontSize};
  padding: 2px 4px;
`;

export const rowInputStyles = css`
  margin-bottom: 0;
`;

export const errorInputStyles = css`
  border: 2px solid ${THEME.errorMessageTextColor};
`;
