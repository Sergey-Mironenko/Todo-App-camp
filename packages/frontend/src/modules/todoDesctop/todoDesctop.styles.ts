import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const rowStyles = css`
  position: relative;
  height: 50px;
  color: ${THEME.secondaryTextColor};

  & th {
    height: 50px;
  }
`;

export const linkStyles = css`
  display: flex;
  justify-content: right;
  align-items: center;
  position: absolute;
  top: 3px;
  left: -15px;
  height: 44px;
  width: 870px;
  content: "";
  box-shadow: 0 1px 4px 0 ${THEME.shadowColor},
  0 0 0 0 ${THEME.borderColor};
  border-radius: 5px;

  &:hover {
    box-shadow: 0 1px 4px 0 ${THEME.shadowColor},
    0 1px 4px 0 ${THEME.shadowColor};
  }
`;
