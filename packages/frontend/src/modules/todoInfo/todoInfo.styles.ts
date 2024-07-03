import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const titleStyles = (onPhone: boolean = false, onTablet: boolean = false): string => {
  return css`
    text-align: center;
    font-size: ${onPhone ? '35px' : '60px'};
    font-weight: ${THEME.todoList.fontWeight};
    color: ${THEME.todoList.textColor};
    margin-bottom: ${onPhone ? THEME.todoList.gadgetMarginBottom: THEME.todoList.desctopMarginBottom};
  `;
};

export const infoStyles = (onPhone: boolean = false, onTablet: boolean = false): string => {
  return css`
    display: flex;
    flex-direction: column;
    width: 600px;
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
      `width: 450px;
      padding: 30px 40px;`
    )}

    & [type="checkbox"] {
      width: 25px;
      height: 25px;

      ${onPhone && (
        `width: 17px;
        height: 17px;`
      )}

      ${onTablet && (
        `width: 22px;
        height: 22px;`
      )}
    }
  `
};

export const formStyles = (onPhone: boolean = false, onTablet: boolean = false): string => {
  return css`
    display: flex;
    flex-direction: column;
    width: 600px;
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
      `width: 450px;
      padding: 30px 40px;`
    )}

    & textarea {
      height: fit-content;
    }

    & [type="checkbox"] {
      width: 25px;
      height: 25px;
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

export const containerStyles = (row: boolean = false, onPhone: boolean = false, onTablet: boolean = false): string => {
  return css`
    display: flex;
    flex-direction: ${row ? 'row' : 'column'};
    gap: ${row ? '10px' : '0'};
    margin-bottom: ${row ? '30px' : '0'};

    & * {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 8px;

      ${onPhone && (
        `font-size: 14px;
        margin-bottom: 4px;`
      )}

      ${onTablet && (
        `font-size: 18px;
        margin-bottom: 6px;`
      )}
    }

    & div {
      margin-bottom: ${row ? '0' : '30px'};
      font-size: 20px;
      font-family: ${THEME.fontFamily};
      font-weight: 600;
      color: ${THEME.secondaryTextColor};
      
      border-radius: 3px;
      padding: 4px 5px;

      ${onPhone && (
        `font-size: 14px;
        padding: 1px 2px;`
      )}

      ${onTablet && (
        `font-size: 18px;
        padding: 2px 4px;`
      )}
    }
  `
};

export const buttonContainerStyles = (onPhone: boolean = false, onTablet: boolean = false): string => {
  return css`
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${onPhone && (
      `flex-derection: column;
      justify-content: unset;`
    )}

    & * {
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
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
        width: 100%;
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
        color: ${THEME.secondaryTextColor};
        text-decoration: none;
      }
    }

    & a {
      margin-left: auto;
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
