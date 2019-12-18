import { createGlobalStyle } from 'styled-components';

import { red } from 'utils';

export const GlobalStyle = createGlobalStyle`
    /* Soft CSS Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      &:focus {
        outline-color: ${red};
      }
    }

    /* Set up page flow with sticky footer */
    body, html, #root {
      min-height: 100vh;
    }

    #root {
      display: flex;
      flex-direction: column;
      overflow: hidden;       
    }
`;
