import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
 
  }

  :root{
    --background: #343434;
    --green: #43BA88;
    --ligth-background: #E9EAE9;
    --black: #101010;
    --white: #e7e7e7;
    --blue: #148695;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;

    
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    
    margin: 0 auto;
    padding: 0 0 50px;
  }

  button {
    cursor: pointer;
  }
`;
