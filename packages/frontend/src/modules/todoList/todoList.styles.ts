import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const todoListStyles = (): string => {
  return css`
    position: relative;
    margin: 0 auto;
    align-items: center;
    width: 100%;
    margin-bottom: ${THEME.todoList.marginBottom};
  `;
};


export const titleStyles = (isOnPhone: boolean = false): string => {
  return css`
    text-align: center;
    font-size: ${isOnPhone ? '35px' : '60px'};
    font-weight: ${THEME.todoList.fontWeight};
    color: ${THEME.todoList.textColor};
    margin-bottom: ${isOnPhone ? THEME.todoList.gadgetMarginBottom: THEME.todoList.desctopMarginBottom};
  `;
};

export const addButtonStyles = (isOnPhone: boolean = false, isOnTablet: boolean = false): string => {
  return css`
    font-family: ${THEME.fontFamily};
    font-weight: ${THEME.primaryFontWeight};
    font-size: ${THEME.todoList.buttonDesctopFontSize};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${THEME.todoList.buttonTextColor};
    width: 900px;
    height: 100px;
    margin-bottom: ${THEME.todoList.buttonDesctopMarginBottom};
    ${isOnPhone && (
      `width: 280px;
      height: 60px;
      font-size: ${THEME.todoList.buttonPhoneFontSize};
      margin-bottom: ${THEME.todoList.buttonPhoneMarginBottom};`
    )}
    ${isOnTablet && (
      `width: 420px;
      height: 80px;
      font-size: ${THEME.todoList.buttonTabletFontSize};`
    )}
    padding: ${THEME.todoList.padding};
    background: ${THEME.baseColor};
    border-radius: 10px;
    border: none;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
    0 0 0 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;

    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
      0 1px 8px 0 rgba(0, 0, 0, 0.2);
      text-decoration: none;
      color: ${THEME.todoList.buttonTextColor};
    }
    margin: auto;
    margin-bottom: 10px;
  `;
};

export const tableContainerStyles = (): string => {
  return css`
    height: 466px;
    width: 900px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
    0 0 0 0 rgba(0, 0, 0, 0.2);
    background: #fff;
  `;
};

export const tableStyles = (): string => {
  return css`
    color: ${THEME.secondaryColor};
    table-layout: auto;
    text-align: left;
    padding: ${THEME.todoList.tablePadding};
    width: 900px;
  `;
};

export const tableHeadStyles = (): string => {
  return css`
    position: relative;
    margin: ${THEME.todoList.tableHeadMargin};
  `;
};

export const rowStyles = (): string => {
  return css`
    position: relative;
    height: 50px;
  `
};

export const messageStyles = (onPhone: boolean = false, onTablet: boolean = false, error: boolean = false): string => {
  return css`
    background: ${error ? '#E8938F' : '#85F28A'};
    color: ${error ? '#CB403A' : '#18C11A'};
    border-radius: 4px;
    margin-top: 15px;
    font-size: 20px;
    padding: 20px;
    opacity: 0.7;

    ${onPhone && (
      `margin-top: 10px;
      font-size: 14px;
      padding: 10px;`
    )}

    ${onTablet && (
      `margin-top: 12px;
      font-size: 18px;
      padding: 12px;`
    )}
  `
};
