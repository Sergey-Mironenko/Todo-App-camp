import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const todoListStyles = css`
  position: relative;
  margin: 0 auto;
  align-items: center;
  width: 100%;
  margin-bottom: ${THEME.todoList.marginBottom};
`;

export const titleStyles = css`
  text-align: center;
  font-size: 60px;
  font-weight: ${THEME.todoList.fontWeight};
  color: ${THEME.todoList.textColor};
  margin-bottom: ${THEME.todoList.desctopMarginBottom};
`;

export const phoneTitleStyles = css`
  font-size: 35px;
  margin-bottom: ${THEME.todoList.gadgetMarginBottom};
`;

export const addButtonStyles = css`
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
  padding: ${THEME.todoList.padding};
  background: ${THEME.baseColor};
  border-radius: 10px;
  border: none;
  box-shadow: 0 1px 4px 0 ${THEME.shadowColor},
  0 0 0 0 ${THEME.borderColor};
  cursor: pointer;

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 4px 0 ${THEME.shadowColor},
    0 1px 8px 0 ${THEME.borderColor};
    text-decoration: none;
    color: ${THEME.todoList.buttonTextColor};
  }
  margin: auto;
  margin-bottom: 10px;
`;

export const phoneAddButtonStyles = css`
  width: 280px;
  height: 60px;
  font-size: ${THEME.todoList.buttonPhoneFontSize};
  margin-bottom: ${THEME.todoList.buttonPhoneMarginBottom};
`;

export const tabletAddButtonStyles = css`
  width: 420px;
  height: 80px;
  font-size: ${THEME.todoList.buttonTabletFontSize};
`;

export const tableContainerStyles = css`
  height: 466px;
  width: 900px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 1px 4px 0 ${THEME.shadowColor},
  0 0 0 0 ${THEME.borderColor};
  background: ${THEME.baseColor};
`;

export const tableStyles = css`
  color: ${THEME.secondaryColor};
  table-layout: auto;
  text-align: left;
  padding: ${THEME.todoList.tablePadding};
  width: 900px;
`;

export const tableHeadStyles = css`
  position: relative;
  margin: ${THEME.todoList.tableHeadMargin};
`;

export const rowStyles = css`
  position: relative;
  height: 50px;
`;

export const messageStyles = css`
  background: ${THEME.messageColor};
  color: ${THEME.messageTextColor};
  border-radius: 4px;
  margin-top: 15px;
  font-size: ${THEME.labelFontSize};
  padding: 15px;
  width: 336px;
  text-align: center;
  opacity: 0.7;
`;

export const phoneMessageStyles = css`
  margin-top: 10px;
  font-size: ${THEME.phonelabelFontSize};
  padding: 10px;
`;

export const tabletMessageStyles = css`
  margin-top: 12px;
  font-size: ${THEME.tabletlabelFontSize};
  padding: 12px;
`;

export const errorMessageStyles = css`
  background: ${THEME.errorMessageColor};
  color: ${THEME.errorMessageTextColor};
`;
