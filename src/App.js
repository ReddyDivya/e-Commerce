import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { commerce } from "./lib/commerce";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/Checkout/CheckoutForm";

// custom hook for getting previous cart value 
function usePrevious(cartVal) {

  const previousRef = useRef();//the useRef Hook allows us to persist data between renders

  useEffect(() => {
    previousRef.current = cartVal;  //assign the ref's current value with the cart value
  }, [cartVal]);//run this code when the value of the cart changes

  return previousRef.current; //returning previous cart values
}

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const prevCart = usePrevious(cart);

  //fetching the products from commerce
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  //fetching the cart info from commerce
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  };

  //add items to cart
  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);

    setCart(response.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  }

  const handleRemovefromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  }

  const handleEmptyCart = () => {
    const response = commerce.cart.empty();
    setCart(response.cart);
  }

  useEffect(() => {

    if (prevCart != cart) {
      fetchProducts();
      fetchCart();
    }
    return;

  }, [prevCart]); //run this code when the value of previous cart changes


  return (
    <Router>
      <Navbar totalItems={(cart != null || cart != undefined) ? cart.total_items : 0} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />} />

        <Route path="/cart" element={(cart != null || cart != undefined) && <Cart cart={cart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemovefromCart={handleRemovefromCart}
          handleEmptyCart={handleEmptyCart}
        />} />
        <Route path="/CheckoutForm" element={<CheckoutForm />} />
      </Routes>
    </Router>
  );

}

export default App;
