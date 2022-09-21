import React from 'react'
import { Link } from "react-router-dom";
import CartItem from "../Cart/CartItem";

export default function Cart({ cart }) {

    const EmptyCart = () => {
        return (
            <div>
                <article class="prose lg:prose-xl">
                    You have no items in your shopping cart,
                    &nbsp;<Link to="/products">start adding some!</Link>
                </article>
            </div>
        )
    }

    const FilledCart = () => {
        return (
            <>
                <div className="flex justify-between items-center mb-4">
                    <h5 className="text-5xl font-bold text-gray-900">Cart Items</h5>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            cart.line_items.map((lineItem) => (
                                <CartItem item={lineItem} key={lineItem.id} />
                            ))
                        }
                    </ul>
                </div>
            </>
        )
    }

    return (
        <div className="m-10 p-4 w-4/4 bg-white rounded-lg border shadow-md">
            {
                (cart.total_items > 0 ? FilledCart() : EmptyCart())
            }
        </div>
    )
}
