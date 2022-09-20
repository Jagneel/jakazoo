import React, { useEffect, useState } from 'react';
import './App.css';
import { commerce } from './lib/commerce';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './api/api';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import NavBar from './components/nav/NavBar';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import BigCats from './components/products/categories/BigCats';
import Ungulates from './components/products/categories/Ungulates';
import Bears from './components/products/categories/Bears';
import AllAnimals from './components/products/categories/AllAnimals';
import Checkout from './components/checkout/Checkout';

interface cart {
  id: string;
  total_items: number;
  subtotal: {
    formatted_with_symbol: string;
  };
  line_items: [{
    id: string;
    name: string;
    quantity: number;
    image: {
      url: string
    };
    price: {
      formatted_with_symbol: string;
    };
  }];
}

function App() {
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [cart, setCart] = useState<cart>({
    id: '',
    total_items: 0,
    subtotal: {
      formatted_with_symbol: '0'
    },
    line_items: [{
      id: '',
      name: '',
      quantity: 0,
      image: {
        url: ''
      },
      price: {
        formatted_with_symbol: ''
      }
    }]
  });

  const productData = useFetch()

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  useEffect(() => {
    fetchCart();
  }, [])

  const handleAddToCart = async (productId: string, quantity: number) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item)
  }

  const handleUpdateCartQty = async (productId: string, quantity: number) => {
    const item = await commerce.cart.update(productId, { quantity });

    setCart(item)
  }

  const handleRemoveFromCart = async (productId: string) => {
    const item = await commerce.cart.remove(productId);

    setCart(item)
  }

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty();

    setCart(item)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId: any, newOrder: any) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

      setOrder(incomingOrder)
      refreshCart()
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  }

  return (
    <div className='App'>
      <NavBar totalItems={cart.total_items} />
      <Routes>
        <Route path='/' element={<Home products={productData} onAddToCart={handleAddToCart} />} />
        <Route path='products' element={<Products products={productData} onAddToCart={handleAddToCart} />}>
          <Route path='all-animals' element={<AllAnimals products={productData} onAddToCart={handleAddToCart} />} />
          <Route path='big-cats' element={<BigCats products={productData} onAddToCart={handleAddToCart} />} />
          <Route path='ungulates' element={<Ungulates products={productData} onAddToCart={handleAddToCart} />} />
          <Route path='bears' element={<Bears products={productData} onAddToCart={handleAddToCart} />} />
        </Route>
        <Route
          path='cart'
          element={<Cart cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
          />} />
        <Route path='checkout' element={<Checkout
          cart={cart}
          order={order}
          onCaptureCheckout={handleCaptureCheckout}
          error={errorMessage}
        />} />
      </Routes>
    </div >
  );
}

export default App;

