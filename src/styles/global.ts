import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { darken } from 'polished';


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

export const GlobalProduct = styled.ul`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 1rem;
list-style: none;
margin-top: 2rem;
transition: all 200ms;


li {
display: flex;
flex-direction: column;
background: #fff;
border-radius: 0.5rem;
padding: 1rem;
position: relative;

& + li{
  margin-left: 1rem;
}

div {
  display: flex;
  align-items: center;
  padding: 12px;
  position: absolute;
  bottom: 12.5%;
  right: 10%; 


  svg {
    margin-right: 5px;

  }
}

img {
  align-self: center;
  width: 250px;
  height:250px;
}

> strong {
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 1rem;
}

> span {
  font-size: 21px;
  font-weight: bold;
  margin: 0.5rem 0 1rem;
}

button {
  background: var(--blue);
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
  height: 2rem;

  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.06, '#35A7FF')};
  }

  

  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
}
}
`
