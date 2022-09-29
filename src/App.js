import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { commerce } from "./lib/commerce";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/Checkout/CheckoutForm";

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

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
    fetchProducts();
    fetchCart();
  }, [cart]);

  return (
    <Router>
      <div>
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
      </div >
    </Router>
  );

}

export default App;
