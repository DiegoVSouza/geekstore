import React, { useEffect, useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { useCart } from "../../hooks/useCart";
import { api } from "../../services/api";
import { Container, ProductList } from "./styles";


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


const Acessories = (): JSX.Element =>{

    const [accessoriesProducts, setAccessoriesProducts] = useState<ProductFormatted[]>([])
    const {addProduct, cart} = useCart()
    useEffect(()=>{
        async function loadProducts(){
            const products = await api.get('accessories-products')
            setAccessoriesProducts(products.data)
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
            <ProductList>
                {accessoriesProducts.map( product =>(
                    <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.price}</span>
                    <button
                      type="button"
                      data-testid="add-product-button"
                      onClick={() => handleAddProduct(product.id)}
                    >
                      <div data-testid="cart-product-quantity">
                        <IoBagAdd size={16} color="#FFF" />
                        {cartItemsAmount[product.id] || 0}
                      </div>
          
                      <span>Adicionar Produto ao carrinho</span>
                    </button>
                  </li>
                ))}
            </ProductList>
        </Container>

        );
    };

export default Acessories;