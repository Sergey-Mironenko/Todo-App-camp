import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const titleStyles = css`
  text-align: center;
  font-size: ${THEME.titleFontSize};
  font-weight: ${THEME.todoList.fontWeight};
  color: ${THEME.todoList.textColor};
  margin-bottom: ${THEME.todoList.desctopMarginBottom};
`;

export const phoneTitleStyles = css`
  font-size: ${THEME.phoneTitleFontSize};
  margin-bottom: ${THEME.todoList.gadgetMarginBottom};
`;

export const infoStyles = css`
  display: flex;
  flex-direction: column;
  width: 600px;
  color: ${THEME.secondaryColor};
  padding: 40px 80px;
  background: ${THEME.baseColor};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4),
  0 5px 10px 0 rgba(0, 0, 0, 0.2);

  & [type="checkbox"] {
    width: 25px;
    height: 25px;
  }
`;

export const phoneInfoStyles = css`
  width: 300px;
  padding: 20px;

  & [type="checkbox"] {
    width: 17px;
    height: 17px;
  }
`;

export const tabletInfoStyles = css`
  width: 450px;
  padding: 30px 40px;

  & [type="checkbox"] {
    width: 22px;
    height: 22px;
  }
`;

export const formStyles = css`
  display: flex;
  flex-direction: column;
  width: 600px;
  color: ${THEME.secondaryColor};
  padding: 40px 80px;
  background: ${THEME.baseColor};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 ${THEME.shadowColor},
  0 5px 10px 0 ${THEME.borderColor};

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
    font-size: ${THEME.labelFontSize};
    background: ${THEME.baseColor};
    height: 60px;
    width: 130px;
    border: none;
    border-radius: 4px;
    color: ${THEME.secondaryTextColor};
    box-shadow: 0 1px 2px 0 ${THEME.shadowColor},
    0 2px 10px 0 ${THEME.borderColor};
    margin-top: 20px;
    cursor: pointer;

    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 1px 2px 0 ${THEME.shadowColor},
      0 2px 10px 0 ${THEME.borderColor};
    }
  }
`;

export const phoneFormStyles = css`
  width: 300px;
  padding: 20px;

  & button {
    height: 40px;
    width: 70px;
    font-size: ${THEME.phonelabelFontSize};
    margin-top: 10px;
  }
`;

export const tabletFormStyles = css`
  width: 450px;
  padding: 30px 40px;

  & button {
    height: 50px;
    width: 100px;
    font-size: ${THEME.tabletlabelFontSize};
    margin-top: 15px;
  }
`;

export const containerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 0;

  & * {
    font-size: ${THEME.labelFontSize};
    font-weight: 500;
    margin-bottom: 8px;
  }

  & div {
    margin-bottom: 30px;
    font-size: ${THEME.labelFontSize};
    font-family: ${THEME.fontFamily};
    font-weight: 600;
    color: ${THEME.secondaryTextColor};
    
    border-radius: 3px;
    padding: 4px 5px;
  }
`;

export const phoneContainerStyles = css`
  & * {
    font-size: ${THEME.phonelabelFontSize};
    margin-bottom: 4px;
  }

  & div {
    font-size: ${THEME.phonelabelFontSize};
    padding: 1px 2px;
  }
`;

export const tabletContainerStyles = css`
  font-size: ${THEME.tabletlabelFontSize};
  margin-bottom: 6px;
  }

  & div {
    font-size: ${THEME.tabletlabelFontSize};
    padding: 2px 4px;
  }
`;

export const rowContainerStyles = css`
  flex-direction: row;
  gap: 10px;
  margin-bottom: 30px;

  & div {
    margin-bottom: 0;
  }
`;

export const buttonContainerStyles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & * {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    font-family: ${THEME.fontFamily};
    font-weight: 500;
    font-size: ${THEME.labelFontSize};
    background: ${THEME.baseColor};
    height: 60px;
    width: 130px;
    border: none;
    border-radius: 4px;
    color: ${THEME.secondaryTextColor};
    box-shadow: 0 1px 2px 0 ${THEME.shadowColor},
    0 2px 10px 0 ${THEME.borderColor};
    margin-top: 20px;
    cursor: pointer;

    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 1px 2px 0 ${THEME.shadowColor},
      0 2px 10px 0 ${THEME.borderColor};
      color: ${THEME.secondaryTextColor};
      text-decoration: none;
    }
  }

  & a {
    margin-left: auto;
  }
`;

export const phoneButtonContainerStyles = css`
  flex-derection: column;
  justify-content: unset;
  
  & * {
    height: 40px;
    width: 100%;
    font-size: ${THEME.phonelabelFontSize};
    margin-top: 10px;
  }
`;

export const tabletButtonContainerStyles = css`
  height: 50px;
  width: 100px;
  font-size: ${THEME.tabletlabelFontSize};
  margin-top: 15px;

  & * {
    height: 50px;
    width: 100px;
    font-size: ${THEME.tabletlabelFontSize};
    margin-top: 15px;
  }
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
