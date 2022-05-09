import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@ecommerce:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const productExistsInCart = cart.find(product => product.id === productId);
      if(productExistsInCart){
        const {amount: productAmount} = productExistsInCart;
        const {data: stock} = await api.get<Stock>(`stock/${productId}`);
        const productInStock = stock.amount > productAmount;
        if(!productInStock){throw Error("Request Quantity is out of stock")};
          
        const updateCart = cart.map(product => product.id === productId ? {...product, amount: productAmount + 1} : product)

        setCart(updateCart)

        localStorage.setItem('@ecommerce:cart', JSON.stringify(updateCart));
        return
      };
      const {data} = await api.get<Product>(`products/${productId}`);
      const addNewProductToCart = [...cart,{...data, amount: 1}]
      setCart(addNewProductToCart)
      localStorage.setItem('@ecommerce:cart', JSON.stringify(addNewProductToCart));
      
      }
    catch {
      toast.error("Erro na adição do produto")
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const product = cart.find(product => product.id === productId);
      if(!product){
        throw new Error('Produto não ta no carro');
      }
      const filteredCart = cart.filter(response => response.id !== productId);

      setCart(filteredCart)

      localStorage.setItem('@ecommerce:cart', JSON.stringify(filteredCart));

    } catch {
      toast.error('Erro na remoção do produto');
    }
    
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if(amount < 0) {return};
      const {data:stock} = await api.get<Stock>(`stock/${productId}`);
      if(amount > stock.amount){
        throw new Error('Quantidade no estoque insuficiente');
      }else{
        const {data} = await api.get<Product>(`products/${productId}`);
        
        const filter = cart.filter(product => product.id !== productId)
        
        const updateCart = [...cart]
        const productUpdate = updateCart.find(product => product.id === productId)

        if(productUpdate){
          productUpdate.amount = amount
          setCart(updateCart)
          localStorage.setItem('@ecommerce:cart', JSON.stringify(updateCart));
        }
        
        
        return
      }

      

    } catch {
      toast.error('Erro na alteração de quantidade do produto');
      
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
