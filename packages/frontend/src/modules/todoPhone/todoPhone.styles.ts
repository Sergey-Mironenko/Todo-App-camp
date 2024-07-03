import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const rowStyles = (isOnTablet: boolean = true, isPrivate: boolean = true): string => {
    return css`
      display: flex;
      position: relative;
      ${isPrivate && `
        justify-content: space-between;
      `};
      align-items: center;
      padding: ${THEME.todoGadget.paddingPhone};
      background: ${THEME.baseColor};
      border-radius: 10px;
      height: 35px;
      min-height: 35px;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
      0 0 0 0 rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      text-decoration: none;
      color: ${THEME.secondaryTextColor};
  
      & > * {
        width: 109px;
      } 
    `
};

export const containerStyles = (isOnTablet: boolean = true): string => {
  return css`
    margin-top: ${THEME.todoGadget.containerPhoneMarginTop};
  `
};

export const buttonStyles = (isOnTablet: boolean = true): string => {
  return css`
    font-family: ${THEME.fontFamily};
    font-weight: ${THEME.primaryFontWeight};
    font-size: THEME.todoGadget.fontSizePhone;
    height: 28px;
    width: 45px;
    max-width: 45px;
    border: none;
    border-radius: 5px;
    color: ${THEME.secondaryColor};
    background: ${THEME.baseColor};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2),
    0 1px 0 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;

    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
      0 1px 20px 0 rgba(0, 0, 0, 0.2);
    }
  `
};

export const formStyles = (isOnTablet: boolean = true): string => {
    return css`
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      display: flex;
      align-items: center;
      background: ${THEME.baseColor};
      height: 35px;
      width: 270px;
      padding: ${THEME.todoGadget.formPhonePadding};
      border-radius: 5px;
      z-index: 5;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4),
      0 15px 10px 0 rgba(0, 0, 0, 0.2);
  `
};

export const rowFormStyles = (isOnTablet: boolean = true): string => {
  return css`
  display: grid;
  grid-template-columns: 110px 108px 65px;
  align-items: center;
  `
};

export const fieldContainerStyles = (isOnTablet: boolean = true): string => {
  return css`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 20px;
  `
};

export const fieldStyles = (isOnTablet: boolean = true, error: boolean = false): string => {
  return css`
    display: block;
    font-family: ${THEME.fontFamily};
    font-weight: ${THEME.primaryFontWeight};
    font-size: ${THEME.todoGadget.fieldPhoneFontSize};
    color: ${THEME.secondaryColor};
    width: 90px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    border-color: ${error ? 'rgb(215, 124, 124)' : 'rgba(0, 0, 0, 0.2)' };
  `
};

export const checkboxContainerStyles = (): string => {
  return css`
    display: flex;
    align-items: center;
    gap: 5px;
  `
};

export const checkboxStyles = (isOnTablet: boolean = true): string => {
  return css`
  width: 15px;
  height: 15px;
  cursor: pointer;
  `
};

export const errorStyles = (): string => {
  return css`
    padding-left: ${THEME.todoGadget.errorGadgetPaddingLeft};
    font-weight: ${THEME.todoGadget.errorGadgetFontWeight};
    font-size: ${THEME.todoGadget.errorGadgetFontSize};
    color: ${THEME.todoList.textColor};
  `
};
