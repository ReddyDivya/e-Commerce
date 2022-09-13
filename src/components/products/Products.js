import React from 'react';
import Product from "./Product";

export default function Products() {
    return (
        <div className="grid grid-cols-3">
            <Product />
            <Product />
            <Product />
        </div>
    )
}
