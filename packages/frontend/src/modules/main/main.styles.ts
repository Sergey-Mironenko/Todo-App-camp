import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const titleStyles = css`
  font-size: ${THEME.bigFontSize};
  margin: 120px 0 40px;
  color: ${THEME.primaryTextColor};
`;

export const phoneTitleStyles = css`
  font-size: ${THEME.titleFontSize};
  margin: 90px 0 20px;
  color: ${THEME.primaryTextColor};
`;

export const tabletTitleStyles = css`
  font-size: ${THEME.mediumFontSize};
  margin: 105px 0 30px;
  color: ${THEME.primaryTextColor};
`;

export const buttonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${THEME.smallFontSize};
  font-weight: 500;
  border-radius: 10px;
  color: ${THEME.secondaryColor};
  background: ${THEME.baseColor};
  width: 500px;
  height: 100px;
  box-shadow: 0 1px 4px 0 ${THEME.borderColor},
  0 5px 20px 0 ${THEME.subshadowColor};

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 4px 0 ${THEME.shadowColor},
    0 5px 20px 0 ${THEME.borderColor};
    text-decoration: none;
    color: ${THEME.secondaryColor};
  }
`;

export const phoneButtonStyles = css`
  font-size: ${THEME.tabletSubtitleFontSize};
  width: 280px;
  height: 70px;
`;

export const tabletButtonStyles = css`
  font-size: ${THEME.headerFontSize};
  width: 400px;
  height: 85px;
`;
