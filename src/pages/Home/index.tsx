import React, { useState, useEffect } from 'react';

import { IoArrowBackCircle, IoArrowForwardCircle, IoBagAdd, IoCaretBackOutline, IoCaretForwardOutline } from 'react-icons/io5';
import { BannersContainer, Container, Nav, ProductList , Slide } from './styles';

import { api } from '../../services/api';
import { useCart } from '../../hooks/useCart';

import { Link } from 'react-router-dom';
import { formatPrice } from '../../util/format';


interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface Banner{
  id: number;
  title: string;
  link: string;
  image: string;
}
interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [bestProducts, setbestProducts] = useState<ProductFormatted[]>([])
  const [banners, setBanners] = useState<Banner[]>([])
  const {addProduct,cart} = useCart()
  const [idx, setIdx] = useState<number>(0)
  const [idxProduct, setIdxProduct] = useState<number>(0)

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount
    return sumAmount
  }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      const {data:bestProducts} = await api.get('best-products')
      const productFormatted = bestProducts.map(function (product: Product) {
        return { ...product, price: formatPrice(product.price) }
      })
      setbestProducts(productFormatted) 

      const banners = await api.get('banners')
      
      setBanners(banners.data)
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    addProduct(id)
  }
  

  async function handleBannerRight(){

    setIdx(idx+1)
    const {data:banners} = await api.get('banners')

      if(idx>banners.length -2){setIdx(0)}

  }

  async function handleBannerLeft(){

    setIdx(idx-1)
    const {data:banners} = await api.get('banners')
    
    if(idx<=0){setIdx(banners.length-1)}
 
  }

  async function handleProductRight(){
    const totalWidth = Math.ceil(300*bestProducts.length)
    const width = Math.ceil(totalWidth - window.innerWidth)

    setIdxProduct(idxProduct+1)

    if(idxProduct*300>=width){setIdxProduct(0)}
  }
  async function handleProductLeft(){

    const totalWidth = Math.ceil(300*bestProducts.length)
    const width = Math.ceil(totalWidth - window.innerWidth)
    const max = Math.ceil(width/300)
    
    setIdxProduct(idxProduct-1)
    if(idxProduct<=0){setIdxProduct(max)}
  } 



  const sliderStyleBanner = {
    transition: 'all 200ms',
    transform: `translateX(-${idx*window.innerWidth}px)`
  }

  const sliderStyleProduct ={
    transition: 'all 200ms',
    transform: `translateX(-${idxProduct*300}px)`
  }

  const imgStyle ={
    height: '100%',
    width: window.innerWidth
  }

  return (
    <Container>
      <BannersContainer>
            <Slide >
              <div id='slider'>
                {banners.map(banner =>(
                      <li className='banners'  key={banner.id} style={sliderStyleBanner}>
                        <Link to={banner.link}>
                        <img className='banner' src={banner.image} alt={banner.title} style={imgStyle}/>
                        </Link>
                      </li>    
                ))}
              </div>
            </Slide>
            <div className='arrows Right' onClick={()=>handleBannerRight()}>
              <IoArrowForwardCircle size={64} color="#FFF" />
            </div>

            <div className='arrows Left' onClick={()=>handleBannerLeft()} >
              <IoArrowBackCircle size={64} color="#FFF" />
            </div>
            

        </BannersContainer>

    <Nav>
      <h2>Mais Comprados</h2>
      <div>
        <div onClick={()=>handleProductLeft()}>
              <IoCaretBackOutline size={32} color="#ffffff" />
        </div>

        <div onClick={()=>handleProductRight()}>
              <IoCaretForwardOutline size={32} color="#ffffff" />
        </div>
      </div>
      
    </Nav>
    <ProductList>
    <section>
      {bestProducts.map( product =>(
        <li key={product.id} style={sliderStyleProduct}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.price}</span>

          <div data-testid="cart-product-quantity">
              <IoBagAdd size={24} color="#000" />
              {cartItemsAmount[product.id] || 0}
            </div>

          <button
            type="button"
            data-testid="add-product-button"
            onClick={() => handleAddProduct(product.id)}
          >
            <span>Adicionar Produto ao carrinho</span>
          </button>
        </li>
        ))}

        </section>
      </ProductList>

    </Container>
  );
};

export default Home;
