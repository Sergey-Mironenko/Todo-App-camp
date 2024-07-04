import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const sliderStyles = css`
  margin: auto;
  display: flex;
  flex-direction: column;
  font-size: ${THEME.todoList.listFontSize};
  gap: 7px;
  overflow: scroll;
  color: ${THEME.secondaryColor};
  padding: ${THEME.todoList.listPhonePadding};
  background: ${THEME.baseColor};
  border-radius: 10px;
  width: 280px;
  height: 210px;
  box-shadow: 0 1px 4px 0 ${THEME.shadowColor},
  0 0 0 0 ${THEME.borderColor};
`

export const swiperContainerStyles = css`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: auto;
`;

export const swiperStyles = css`
  display: flex;
  flex-direction: row;
  width: 210px;
  margin: 0;
`;

export const slideStyles = css`
  padding: 0;
`;

export const sliderButtonStyles = css`
  font-family: ${THEME.fontFamily};
  font-weight: ${THEME.primaryFontWeight};
  font-size: ${THEME.todoList.buttonDesctopFontSize};
  color: ${THEME.todoList.buttonTextColor};
  width: 60px;
  height: 270px;
  bottom: 0;
  background: ${THEME.baseColor};
  border: none;
  box-shadow: 0 1px 4px 0 ${THEME.shadowColor},
  0 0 0 0 ${THEME.borderColor};
  border-radius: 5px;
  margin: 10px 44px;

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 4px 0 ${THEME.shadowColor},
    0 2px 6px 0 ${THEME.borderColor};
  }
`;
