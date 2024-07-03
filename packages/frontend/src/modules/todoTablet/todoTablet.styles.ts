import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const cardStyles = (): string => {
  return css`
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
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
    0 0 0 0 rgba(0, 0, 0, 0.2);
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
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
      0 1px 4px 0 rgba(0, 0, 0, 0.4);
      text-decoration: none;
      color: ${THEME.secondaryColor};
    }
  `
};

export const buttonStyles = (isOnTablet: boolean = true): string => {
  return css`
    font-family: ${THEME.fontFamily};
    font-weight: ${THEME.primaryFontWeight};
    font-size: ${isOnTablet ? THEME.todoGadget.fontSizeTablet : THEME.todoGadget.fontSizePhone};
    height: ${isOnTablet ? '44px' : '28px'};
    width: 170px;
    max-width: 170px;
    border: none;
    border-radius: 5px;
    color: ${THEME.secondaryColor};
    background: ${THEME.baseColor};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2),
    0 ${isOnTablet ? '5px 50px' : '1px 0'} 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;

    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
      0 ${isOnTablet ? '5px 100px' : '1px 20px'} 0 rgba(0, 0, 0, 0.2);
    }
  `
};

export const formStyles = (): string => {
    return css`
      position: absolute;
      color: #999;
      top: 0;
      left: 0;
      z-index: 5;
      background: ${THEME.baseColor};
      height: 270px;
      width: 170px;
      padding: ${THEME.todoGadget.formTabletPadding};
      border-radius: 5px;
      z-index: 5;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4),
      0 2px 10px 0 rgba(0, 0, 0, 0.2);
      -webkit-flex-direction: row;
  `
};

export const rowFormStyles = (): string => {
  return css`
  display: block;
  width: 100%;
  text-align: center;
  margin: 10px 0 24px 0;
  `
};

export const errorContainerStyles = (): string => {
  return css`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  `
};

export const fieldStyles = (isOnTablet: boolean = true, error: boolean = false): string => {
  return css`
    display: block;
    font-family: ${THEME.fontFamily};
    font-weight: ${THEME.primaryFontWeight};
    font-size: ${isOnTablet ? THEME.todoGadget.fieldTabletFontSize : THEME.todoGadget.fieldPhoneFontSize};
    color: ${THEME.secondaryColor};
    width: ${isOnTablet ? '120px' : '90px'};
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    border-color: ${error ? 'rgb(215, 124, 124)' : 'rgba(0, 0, 0, 0.2)' };
  `
};

export const checkboxStyles = (): string => {
  return css`
  width: 20px;
  height: 20px;
  margin-left: 4px;
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
