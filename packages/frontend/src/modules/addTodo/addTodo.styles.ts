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
`

export const formStyles = css`
  display: flex;
  flex-direction: column;
  width: 500px;
  color: ${THEME.secondaryColor};
  padding: 40px 80px;
  background: ${THEME.baseColor};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 ${THEME.shadowColor},
  0 5px 10px 0 ${THEME.borderColor};

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
    font-size: ${THEME.labelFontSize};
    background: ${THEME.baseColor};
    height: 60px;
    width: 130px;
    border: none;
    border-radius: 4px;
    color: ${THEME.secondaryTextColor};
    box-shadow: 0 1px 2px 0 ${THEME.secondaryColor},
    0 2px 10px 0 ${THEME.borderColor};
    margin-top: 20px;
    cursor: pointer;

    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 1px 2px 0 ${THEME.secondaryColor},
      0 2px 10px 0 ${THEME.borderColor};
    }
  }
`;

export const tabletFormStyles = css`
  width: 400px;
  padding: 30px 40px;

  & button {
    height: 50px;
    width: 100px;
    font-size: ${THEME.tabletlabelFontSize};
    margin-top: 15px;
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
