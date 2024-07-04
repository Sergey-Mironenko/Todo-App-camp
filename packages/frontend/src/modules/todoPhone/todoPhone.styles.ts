import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const rowStyles = css`
  display: flex;
  position: relative;
  align-items: center;
  padding: ${THEME.todoGadget.paddingPhone};
  background: ${THEME.baseColor};
  border-radius: 10px;
  height: 35px;
  min-height: 35px;
  box-shadow: 0 1px 4px 0 ${THEME.shadowColor},
  0 0 0 0 ${THEME.borderColor};
  border-radius: 5px;
  text-decoration: none;
  color: ${THEME.secondaryTextColor};

  & > * {
    width: 109px;
  } 
`;

export const containerStyles = css`
  margin-top: ${THEME.todoGadget.containerPhoneMarginTop};
`;
