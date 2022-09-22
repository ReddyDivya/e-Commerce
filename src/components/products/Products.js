import React from 'react';
import Product from "./Product";

export default function Products({ products, onAddToCart }) {

    return (
        <main className="m-2 mt-20 grid grid-cols-4">
            {
                products.map((product) => (
                    <Product key={product.id} product={product} onAddToCart={onAddToCart} />
                ))
            }
        </main>
    )
}
