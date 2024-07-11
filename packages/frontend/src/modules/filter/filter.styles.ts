import { css } from "@emotion/css";
import { THEME } from '~shared/styles/theme';

export const filterStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
    height: 50px;
    padding: 15px;
    background: ${THEME.baseColor};
    border-radius: 10px;
    border: none;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
    0 0 0 0 rgba(0, 0, 0, 0.2);
    margin: auto;
    margin-bottom: ${THEME.todoList.buttonDesctopMarginBottom};

    & input {
      font-family: ${THEME.fontFamily};
      font-weight: ${THEME.primaryFontWeight};
      font-size: 25px;
      display: flex;
      color: ${THEME.secondaryTextColor};
      width: 450px;
      height: 40px;
      padding: 5px;
      border-radius: 5px;
      border: 2px solid rgba(0, 0, 0, 0.2);
      cursor: pointer;

      transition: box-shadow 0.3s;

      &:focus {
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.8),
        0 1px 8px 0 rgba(0, 0, 0, 0.2);
        text-decoration: none;
      }

      &::placeholder {
        color: rgba(0, 0, 0, 0.2);
      }
    }

    & div {
      display: flex;
      gap: 10px;
    }
`;

export const tabletFilterStyles = css`
  flex-direction: column;
  height: 100px;
  padding: 7px;
  margin: 0;
  margin: auto;
  width: 420px;

  & input {
    width: 100%;
  }
`;

export const phoneFilterStyles = css`
  flex-direction: column;
  height: 75px;
  padding: 5px;
  margin: 0;
  margin: auto;
  width: 280px;
  margin-bottom: 10px;

  & input {
    font-size: 15px;
    width: 100%;
    height: 20px;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }
`;

export const buttonStyles = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${THEME.fontFamily};
    font-weight: ${THEME.primaryFontWeight};
    font-size: 18px;
    display: flex;
    color: ${THEME.secondaryTextColor};
    width: 200px;
    height: 36px;
    border: none;
    border-radius: 5px;
    background: ${THEME.baseColor};
    cursor: pointer;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
    0 1px 2px 0 rgba(0, 0, 0, 0.2);
    outline: none;
`;

export const phoneButtonStyles = css`
  font-size: 12px;
  height: 17px;
  width: 100%;
`;

export const dropdownStyles = css`
  position: absolute;
  z-index: 5;
  display: none;
  display: flex;
  flex-direction: column;
  top: 38px;
  left: 0;
  width: 200px;
  height: 0;
  padding: 0;
  background: ${THEME.baseColor};
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4),
    0 1px 2px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;

  transition: height 0.3s;

  & button {
    display: block;
    font-family: ${THEME.fontFamily};
    font-weight: ${THEME.primaryFontWeight};
    font-size: 18px;
    background: ${THEME.baseColor};
    color: ${THEME.secondaryColor};
    border: none;
    cursor: pointer;
    margin: 8px 0;

    transition: color 0.3s;

    &:hover {
      color: ${THEME.secondaryTextColor};
    }
  }
`;

export const activeDropdownStyles = css`
  transition: height 0.3s;
  display: flex;
  height: 115.2px;
`;