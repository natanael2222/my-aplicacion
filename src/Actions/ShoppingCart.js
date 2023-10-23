import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { TYPES } from '@/Actions/actions';
import { shoppingInitialState } from '@/Actions/shoppingInitialState';
import { ShoppingReducer } from '@/Actions/shoppingReducer';
import Product from '@/Actions/Product';
import CartItem from '@/Actions/CartItem';

const ENDPOINTS = {
  products: 'http://localhost:5000/products',
  cart: 'http://localhost:5000/cart',
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(ShoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  const updateState = async () => {
    try {
      const resProducts = await axios.get(ENDPOINTS.products);
      const resCart = await axios.get(ENDPOINTS.cart);

      const productsList = resProducts.data;
      const cartItems = resCart.data;

      dispatch({ type: TYPES.UPDATE_PRODUCTS, payload: productsList });
      dispatch({ type: TYPES.UPDATE_CART, payload: cartItems });

      console.log(productsList);
      console.log(cartItems);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    updateState();
  }, []);

  return (
    <>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className='box grid-responsive'>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h3>Carrito</h3>
      <div className='box'>
        {cart.map((item, i) => (
          <CartItem key={i} item={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <h4>
        Total: $ {cart.reduce((acumulador, item) => acumulador + item.price * item.quantity, 0)}
      </h4>
      <br />
      <button onClick={clearCart}>Limpiar Carrito</button>
    </>
  );
};

export default ShoppingCart;
