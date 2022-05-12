import React from 'react';
import { Link } from 'react-router-dom';
import { IoBagHandle, IoImagesSharp, IoPersonCircle } from 'react-icons/io5';


import logo from '../../assets/images/logo.svg';
import { Container, Cart, Nav } from './styles';
import { useCart } from '../../hooks/useCart';
import { useLogin } from '../../hooks/useLogin';

const Header = (): JSX.Element => {
  const {cart} = useCart()
  const { isLogged, userName } = useLogin()
  const cartSize = cart.length

  function Guest(){
    return(
      <div className='account'>
        <Link to='/login'>
          <IoPersonCircle size={36} color='#101010'/>
        </Link>
        <div>
          <Link to='/login'><strong>Entrar</strong></Link>
          <Link to='/createaccount'><label>Criar Conta</label></Link>
        </div>
      </div>
    )
  }
  function User(){
    return(
      <div className='account'>
          <IoImagesSharp size={36} color='#101010'/>

        <div>
          <strong>Bem vindo {userName}</strong>
        </div>
      </div>
    )
  }

  function Account(){
    if(!isLogged){
      return <Guest/>
    }
      
    return <User/>
  }

  return (
    <Container>

      {Account()}

      <Link to="/">
        <div className='home'>
          <strong>Geek Store</strong>
          <img src={logo} alt="GeekStore" />
        </div>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <IoBagHandle size={36} color='#101010' />
      </Cart>
      <Nav>
        <div>
        <Link to='/actionFigures'><li>Action Figures</li></Link>
        <Link to='/manga'><li>Manga</li></Link>
        <Link to='/accessories'><li>Acessórios</li></Link>
        </div>  
      </Nav>
    </Container>
  );
};

export default Header;
