import { css } from '@emotion/css';

export const loaderStyles = (onPhone: boolean = false, onTablet: boolean = false): string => {
  return css`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0.2;
   
    & div {
      border-radius: 50%;
      width: 10em;
      height: 10em;
      margin: 1em auto;
      border: 1em solid #ddd;
      border-left-color: #000;
      animation: load8 1.2s infinite linear;

      @keyframes load8 {
        0% {
          transform: rotate(0deg);
        }
  
        100% {
          transform: rotate(360deg);
        }
      }
    }   
  `
};
  