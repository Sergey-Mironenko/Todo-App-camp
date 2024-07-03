import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const titleStyles = (isOnPhone: boolean = false): string => {
  return css`
    text-align: center;
    font-size: ${isOnPhone ? '35px' : '60px'};
    font-weight: ${THEME.todoList.fontWeight};
    color: ${THEME.todoList.textColor};
    margin-bottom: ${isOnPhone ? THEME.todoList.gadgetMarginBottom: THEME.todoList.desctopMarginBottom};
  `;
};

export const formStyles = (onPhone: boolean = false, onTablet: boolean = false): string => {
  return css`
    display: flex;
    flex-direction: column;
    width: 500px;
    color: ${THEME.secondaryColor};
    padding: 40px 80px;
    background: ${THEME.baseColor};
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4),
    0 5px 10px 0 rgba(0, 0, 0, 0.2);

    ${onPhone && (
      `width: 300px;
      padding: 20px;`
    )}

    ${onTablet && (
      `width: 400px;
      padding: 30px 40px;`
    )}

    & textarea {
      height: 100px;
      resize: none;
    }

    & [type="checkbox"] {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    & button {
      font-family: ${THEME.fontFamily};
      font-weight: 500;
      font-size: ${onPhone ? THEME.header.buttonGadgetFontSize : '20px'};
      background: ${THEME.baseColor};
      height: 60px;
      width: 130px;
      border: none;
      border-radius: 4px;
      color: ${THEME.secondaryTextColor};
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2),
      0 2px 10px 0 rgba(0, 0, 0, 0.1);
      margin-top: 20px;
      cursor: pointer;

      ${onPhone && (
        `height: 40px;
        width: 70px;
        font-size: 14px;
        margin-top: 10px;`
      )}

      ${onTablet && (
        `height: 50px;
        width: 100px;
        font-size: 18px;
        margin-top: 15px;`
      )}

      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4),
        0 2px 10px 0 rgba(0, 0, 0, 0.2);
      }
    }
  `
};

export const messageStyles = (onPhone: boolean = false, onTablet: boolean = false, error: boolean = false): string => {
  return css`
    background: ${error ? '#E8938F' : '#85F28A'};
    color: ${error ? '#CB403A' : '#18C11A'};
    border-radius: 4px;
    margin-top: 15px;
    font-size: 20px;
    padding: 15px;
    width: 336px;
    text-align: center;
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
