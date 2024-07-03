import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const containerStyles = (row: boolean = false): string => {
  return css`
    display: flex;
    flex-direction: ${row ? 'row' : 'column'};
    gap: ${row ? '10px' : '0'};
    margin-bottom: ${row ? '30px' : '0'};
  `
};

export const labelStyles = (onPhone: boolean = false, onTablet: boolean = false): string => {
  return css`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 8px;

    ${onPhone && (
      `font-size: 14px;
      margin-bottom: 4px;`
    )}

    ${onTablet && (
      `font-size: 18px;
      margin-bottom: 6px;`
    )}
  `
};

export const inputStyles = (row: boolean = false, onPhone: boolean = false, onTablet: boolean = false, error: boolean = false): string => {
  return css`
    margin-bottom: ${row ? '0' : '30px'};
    font-size: 20px;
    font-family: ${THEME.fontFamily};
    font-weight: 600;
    color: ${THEME.secondaryTextColor};
    border: 2px solid ${error ? '#CB403A' : 'rgba(0, 0, 0, 0.2)'};
    border-radius: 3px;
    padding: 2px 5px;

    ${onPhone && (
      `font-size: 14px;
      padding: 1px 2px;`
    )}

    ${onTablet && (
      `font-size: 18px;
      padding: 2px 4px;`
    )}
  `
};

