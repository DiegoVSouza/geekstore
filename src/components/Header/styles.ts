import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  background: var(--ligth-background);
  margin: auto;
  padding: 1rem 4rem;



  .home{
    display: flex;
    align-items: center;
    position: absolute;
    top: 2.5rem;
    right: 50%;
    transform: translate(50%, -50%);
    
    
    strong{
      text-align: center;
      color: var(--black);
      padding: 0 1rem; 
      font-size: 2rem;
      font: 2rem VT323;
      
    }
    img{
    width: 60px ;
    }
  }
  
  .account{
    display: flex;
    
    div{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      a{
        color: var(--black);
      }
    }

  }
  

  a {
    transition: opacity 0.2s;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: flex-end;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: var(--black);
    }

    span {
      font-size: 12px;
      color: var(--black);
    }
  }
`;

export const Nav = styled.ul`
  width: 100%;
  margin-top: 2rem;

  div{
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin: auto;
    padding: 0.3rem;
    background: ${lighten(0.1, '#E9EAE9')};
    border-radius: 10px;
  }
  

  a{
    text-decoration: none;
    color: var(--black);
  }

  li{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 8rem;
    height: 2rem;

    
    &:hover{
      background: ${lighten(0.04, '#E9EAE9')};
      color: var(--blue);
      
    }
  }
`
  