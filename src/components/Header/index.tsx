import React from 'react';
import { Link } from 'react-router-dom';
import { IoBagHandle, IoPersonCircle } from 'react-icons/io5';


import logo from '../../assets/images/logo.svg';
import { Container, Cart, Nav } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const {cart} = useCart()
  const cartSize = cart.length

  return (
    <Container>
      <div className='account'>
        
        <Link to='/signin'>
          <IoPersonCircle size={36} color='#101010'/>
        </Link>
        <div>
          <Link to='/signin'><strong>Entrar</strong></Link>
          <Link to='/createaccount'><label>Criar Conta</label></Link>
        </div>
        </div>
        
        
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
