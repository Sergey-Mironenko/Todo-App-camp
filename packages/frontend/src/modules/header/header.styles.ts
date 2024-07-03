import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const HeaderStyles = (onPhone: boolean = false): string => {
  return css`
    width: 100%;
    height: ${onPhone ? '40px' : '60px'};
    background: ${THEME.baseColor};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
    margin: ${onPhone ? THEME.header.gadgetMargin : THEME.header.desctopMargin};
  `;
};

export const containerStyles = (onPhone: boolean = false): string => {
  return css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: ${onPhone ? '0 5px' : '0 25px'};
    width: 100%;
    height: 100%;
  `;
};

export const buttonContainerStyles = (onPhone: boolean = false): string => {
  return css`
    display: flex;
    gap: ${onPhone ? THEME.header.gadgetButtonGap : THEME.header.desctopButtonGap};
  `;
};

export const logoStyles = (onPhone: boolean = false): string => {
  return css`
    font-size: ${onPhone ? THEME.header.logoGadgetFontSize : THEME.header.logoDesctopFontSize};
    color: ${THEME.primaryTextColor}; 
  `;
};

export const buttonStyles = (onPhone: boolean = false, isActive: boolean = false): string => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${THEME.fontFamily};
    font-weight: ${THEME.secondaryFontWeight};
    font-size: ${onPhone ? THEME.header.buttonGadgetFontSize : THEME.header.bttonDesctopFontSize};
    height: ${onPhone ? '30px' : '35px'};
    width: ${onPhone ? '60px' : '90px'};
    color: ${THEME.secondaryTextColor};
    background: ${THEME.baseColor};
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2),
    0 2px 5px 0 rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-underline: none;
    outline: none;
    
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4),
      0 2px 5px 0 rgba(0, 0, 0, 0.2);
      text-decoration: none;
      color: ${THEME.secondaryTextColor};
    }

    ${isActive && (
      `box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4),
      0 2px 5px 0 rgba(0, 0, 0, 0.2);
      text-decoration: none;
      color: ${THEME.secondaryTextColor}`
    )}
  `;
};
