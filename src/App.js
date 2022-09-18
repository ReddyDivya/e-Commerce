import React, { useState, useEffect } from 'react';
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";


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
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log('cart >> ' + cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
      {/* <Switch>
            <Route exact path="/">
              <Products products={products} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart} />
            </Route>
          </Switch> */}
    </div>
  );

}

export default App;
