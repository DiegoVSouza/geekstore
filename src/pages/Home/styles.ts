import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.main`

`

export const ProductList = styled.ul`
padding: 0 4rem 2rem;
overflow-x: hidden;
position: relative; 


section{
  scroll-behavior: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 100%;
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
    height: 2rem ;

    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#148695')};
    }
    
    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
}
}
`
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 4rem 2rem;

  h2{
    color: var(--white);
  }

  div{
    display: flex;
    cursor: pointer;

  }
    
`;


export const BannersContainer = styled.div`
  position: relative;
  overflow: hidden;

  &:hover{
    .arrows{
      svg{
        opacity:1;
      }
    }
    .points{
      li{
        opacity: 1;
      }
    }

  }

.arrows{
  position: absolute;
  top: 50%;
  transition: all 200ms;
  transform: translateY(-50%);

  svg{
    opacity:0.4;
    transition: all 200ms;
  }

  .show{
    opacity: 1;
    transform: translateX(0)
  }
}

.arrows.Right{
  right: 0.5rem;
}

.arrows.Left{
  left: 0.5rem;
}

.points{
  position: absolute;
  bottom: 2rem;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  cursor: pointer;

    .on{
      background: var(--ligth-background);
    }

  li{
    background: var(--background);
    width: 1rem;
    height: 1rem;
    border-radius: 30px;
    list-style:none;
    opacity: 0.4;
    transform: translateY(50%);
    transition: all 200ms;

    & + li{
      margin-left: 1rem;
    }
  }
}

`;

export const Slide = styled.ul`
  display:flex;
  position:relative;
  transition: all 200ms;
  
  
  li{
    height: 31.25rem;

  }
  div{
    transition: all 200ms;
    display:flex;
    
  }

  
  
`


