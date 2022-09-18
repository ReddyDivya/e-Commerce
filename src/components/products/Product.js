import React from 'react'

export default function Product({ product, onAddToCart }) {

    // const handleAddToCart = () => onAddToCart(product.id, 1);

    return (
        <div className="max-w-sm max-h-sm bg-white rounded-lg border border-gray-200 shadow-lg">
            <img className="rounded-t-lg" src={product.image.url} />
            <article className="p-4 prose lg:prose-xl">
                <p className="text-gray-500 font-bold">{product.name} | {product.price.formatted_with_symbol}</p>
                <p dangerouslySetInnerHTML={{ __html: product.description }} className="text-xs text-slate-50" />
                <div className="flex items-center mt-2.5 mb-5">
                    ⭐⭐⭐⭐⭐
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
                <div className="flex mt-4 space-x-3">
                    <button onClick={() => onAddToCart(product.id, 1)} className="inline-flex items-center py-4 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Add to Cart</button>
                    <button className="inline-flex items-center py-4 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Buy Now</button>
                </div>
            </article >
        </div >
    )
}
