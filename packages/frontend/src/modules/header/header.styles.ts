import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const headerStyles = css`
  width: 100%;
  height: ${THEME.titleFontSize};
  background: ${THEME.baseColor};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
  0 25px 50px 0 rgba(0, 0, 0, 0.1);
  margin: ${THEME.header.desctopMargin};
`;

export const phoneHeaderStyles = css`
  height: 40px;
  margin: ${THEME.header.gadgetMargin};
`

export const containerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 25px;
  width: 100%;
  height: 100%;
`;

export const phoneContainerStyles = css`
  padding: 0 5px;
`

export const buttonContainerStyles = css`
  display: flex;
  gap: ${THEME.header.desctopButtonGap};
`;

export const phoneButtonContainerStyles = css`
  gap: ${THEME.header.gadgetButtonGap};
`;

export const logoStyles = css`
  font-size: ${THEME.header.logoDesctopFontSize};
  color: ${THEME.primaryTextColor}; 
`;

export const phoneLogoStyles = css`
  font-size: ${THEME.header.logoGadgetFontSize};
`;

export const buttonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${THEME.fontFamily};
  font-weight: ${THEME.secondaryFontWeight};
  font-size: ${THEME.header.bttonDesctopFontSize};
  height: 35px;
  width: 90px;
  color: ${THEME.secondaryTextColor};
  background: ${THEME.baseColor};
  box-shadow: 0 1px 2px 0 ${THEME.shadowColor},
  0 2px 5px 0 ${THEME.borderColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-underline: none;
  outline: none;

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 2px 0 ${THEME.shadowColor},
    0 2px 5px 0 ${THEME.borderColor};
    text-decoration: none;
    color: ${THEME.secondaryTextColor};
  }
`;

export const phoneButtonStyles = css`
  font-size: ${THEME.header.buttonGadgetFontSize};
  height: 30px;
  width: 60px;
`;

export const activeButtonStyles = css`
  &:hover {
    box-shadow: 0 1px 2px 0 ${THEME.shadowColor},
    0 2px 5px 0 ${THEME.borderColor};
    text-decoration: none;
    color: ${THEME.secondaryTextColor}
  }
`;
