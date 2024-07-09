import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const titleStyles = css`
  font-size: ${THEME.titleFontSize};
  margin-bottom: 40px;
  color: ${THEME.primaryTextColor};
`;

export const phoneTitleStyles = css`
  font-size: ${THEME.headerFontSize};
  margin-bottom: 20px;
`;

export const tabletTitleStyles = css`
  font-size: ${THEME.tabletTitleFontSize};
  margin-bottom: 30px;
`;

export const profileStyles = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  color: ${THEME.secondaryColor};
  padding: 40px;
  background: ${THEME.baseColor};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 ${THEME.shadowColor},
  0 5px 10px 0 ${THEME.borderColor};

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${THEME.fontFamily};
    font-weight: 500;
    font-size: ${THEME.labelFontSize};
    background: ${THEME.baseColor};
    height: 60px;
    width: 100%;
    border: none;
    border-radius: 4px;
    color: ${THEME.secondaryTextColor};
    box-shadow: 0 1px 2px 0 ${THEME.borderColor},
    0 2px 10px 0 ${THEME.subshadowColor};
    text-decoration: none;
    cursor: pointer;

    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 1px 2px 0 ${THEME.shadowColor},
      0 2px 10px 0 ${THEME.borderColor};
    }
  }
`;

export const phoneProfileStyles = css`
  width: 300px;
  padding: 20px;
  gap: 10px;

  & a {
    height: 35px;
    font-size: ${THEME.phonelabelFontSize};
    margin: 0;
  }
`;

export const tabletProfileStyles = css`
  width: 400px;
  padding: 30px 40px;
  gap: 10px;

  & a {
    height: 50px;
    font-size: ${THEME.tabletlabelFontSize};
    margin: 0;
  }
`;
