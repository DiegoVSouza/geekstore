import React, { useEffect, useState } from "react";

import { IoBagAdd } from "react-icons/io5";
import { Container, ProductList } from "./styles";
import {GlobalProduct} from'../../styles/global'

import { useCart } from "../../hooks/useCart";
import { api } from "../../services/api";
import { formatPrice } from "../../util/format";



interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }

interface ProductFormatted extends Product {
    priceFormatted: string;
  }

interface CartItemsAmount {
    [key: number]: number;
  }


const ActionFigures = (): JSX.Element =>{

    const [actionFiguresProducts, setActionFiguresProducts] = useState<ProductFormatted[]>([])
    const {addProduct, cart} = useCart()
    useEffect(()=>{
        async function loadProducts(){
            const {data:products} = await api.get('action-figure-products')
            const productFormatted = products.map(function (product: Product) {
              return { ...product, price: formatPrice(product.price) }
            })
            setActionFiguresProducts(productFormatted)
        }

        loadProducts()
    },[])


    const cartItemsAmount = cart.reduce((sumAmount, product) => {
        sumAmount[product.id] = product.amount
        return sumAmount
      }, {} as CartItemsAmount)

      function handleAddProduct(productId: number){
        addProduct(productId)
      }

    return(

        <Container>
            <h2>Melhores Action Figures</h2>
            <GlobalProduct>
                {actionFiguresProducts.map( product =>(
                    <li key={product.id}>
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
            </GlobalProduct>
        </Container>

        );
    };

export default ActionFigures;