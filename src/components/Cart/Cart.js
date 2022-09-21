import React from 'react'
import { Link } from "react-router-dom";
import CartItem from "../Cart/CartItem";

export default function Cart({ cart, handleUpdateCartQty, handleRemovefromCart, handleEmptyCart }) {

    return (
        <>
            <div className="m-10 p-4 w-4/4 bg-white rounded-lg border shadow-md">
                {
                    (cart.total_items > 0 ? (
                        <>
                            <div className="flex justify-between items-center mb-4">
                                <h5 className="text-5xl font-bold text-gray-900">Cart Items</h5>
                            </div>
                            <div className="flow-root">
                                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {
                                        cart.line_items.map((lineItem) => (
                                            <CartItem
                                                item={lineItem} key={lineItem.id}
                                                onUpdateCartQty={handleUpdateCartQty}
                                                onRemovefromCart={handleRemovefromCart}
                                            />
                                        ))
                                    }
                                </ul>
                            </div>
                            <hr></hr>
                            <div className="m-10">
                                <article className="prose lg:prose-xl font-bold">
                                    Subtotal:  {cart.subtotal.formatted_with_symbol}
                                </article>
                            </div>
                            <div className="m-10 items-center font-semibold text-white dark:text-white">
                                <button className="bg-blue-700 font-bold p-4 rounded text-white" onClick={() => handleEmptyCart()}>Empty Cart</button>
                                <button className="bg-blue-700 font-bold p-4 rounded text-white m-2">Checkout</button>
                            </div>
                        </>
                    ) : (
                        <div>
                            <article className="prose lg:prose-xl">
                                You have no items in your shopping cart,
                                &nbsp;<Link to="/products">start adding some!</Link>
                            </article>
                        </div>
                    ))
                }
            </div>
        </>

    )
}
