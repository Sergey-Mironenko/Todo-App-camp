import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const sliderPhone = (): string => {
  return css`
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
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
    0 0 0 0 rgba(0, 0, 0, 0.2);
  `
}

export const sliderTablet = (isOnTablet: boolean = true): string => {
  return css`
    display: flex;
    flex-direction: column;
  
    ${isOnTablet && (
      `flex-wrap: wrap;
      row-gap: 10px;
      column-gap: 20px;`
    )}
    
    ${!isOnTablet && (
      `font-size: ${THEME.todoList.listFontSize};
      gap: 7px;`
    )}

    color: ${THEME.secondaryColor};
    padding: ${isOnTablet ? THEME.todoList.listTabletPadding : THEME.todoList.listPhonePadding};
    background: ${THEME.baseColor};
    border-radius: 10px;
    width: ${isOnTablet ? '420px' : '280px'};
    height: ${isOnTablet ? '290px' : '210px'};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
    0 0 0 0 rgba(0, 0, 0, 0.2);
  `
};

export const swiperContainer = (): string => {
  return css`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: auto;
  `;
};

export const swiper = (): string => {
  return css`
  display: flex;
  flex-direction: row;
  width: 210px;
  margin: 0;
  `;
};

export const slide = (): string => {
  return css`
    padding: 0;
  `
};

export const sliderButton = (): string => {
  return css`
    font-family: ${THEME.fontFamily};
    font-weight: ${THEME.primaryFontWeight};
    font-size: ${THEME.todoList.buttonDesctopFontSize};
    color: ${THEME.todoList.buttonTextColor};
    width: 60px;
    height: 270px;
    bottom: 0;
    background: ${THEME.baseColor};
    border: none;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
    0 0 0 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: 10px 44px;

    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
      0 2px 6px 0 rgba(0, 0, 0, 0.2);
    }
  `
};

export const TabletFormErrorStyles = (): string => {
  return css`
    padding-left: ${THEME.todoList.errorGadgetPaddingLeft};
    font-weight: ${THEME.todoList.errorGadgetFontWeight};
    font-size: ${THEME.todoList.errorGadgetFontSize};
    color: ${THEME.todoList.textColor};
  `
};
