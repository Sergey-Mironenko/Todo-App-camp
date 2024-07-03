import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const rowStyles = (): string => {
  return css`
    position: relative;
    height: 50px;
    color: ${THEME.secondaryTextColor};

    & th {
      height: 50px;
    }
  `
};

export const linkStyles = (): string => {
  return css`
    display: flex;
    justify-content: right;
    align-items: center;
    position: absolute;
    top: 3px;
    left: -15px;
    height: 44px;
    width: 870px;
    content: "";
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
    0 0 0 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    &:hover {
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
      0 1px 4px 0 rgba(0, 0, 0, 0.4);
    }
  `;
};
