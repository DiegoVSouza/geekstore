import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.main`

padding: 2rem 4rem;


h2{
    color: var(--white)
}
`

export const ProductList = styled.ul`

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

& + li{
  margin-left: 1rem;
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

  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.06, '#35A7FF')};
  }

  >div {
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);

    svg {
      margin-right: 5px;
    }
  }

  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
}
}
    
`