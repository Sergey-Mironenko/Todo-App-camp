import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const cardStyles = css`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${THEME.todoGadget.paddingTablet};
  background: ${THEME.baseColor};
  border-radius: 10px;
  width: 170px;
  height: 250px;
  min-height: 200px;
  box-shadow: 0 1px 4px 0 ${THEME.shadowColor},
  0 0 0 0 ${THEME.borderColor};
  border-radius: 5px;

  & div {
    display: flex;
    gap: 5px;
  }

  & div div {
    color: ${THEME.secondaryTextColor};
  }

  margin: ${THEME.todoTablet.margin};
  color: ${THEME.secondaryColor};

  &:hover {
    box-shadow: 0 1px 4px 0 ${THEME.shadowColor},
    0 1px 4px 0 ${THEME.shadowColor};
    text-decoration: none;
    color: ${THEME.secondaryColor};
  }
`;
