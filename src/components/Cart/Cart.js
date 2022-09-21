import React from 'react'
import CartItem from "../Cart/CartItem";

export default function Cart({ cart }) {
    return (
        <div>
            <div className="m-4 p-3 w-full bg-white rounded-lg border shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h5 className="text-xl font-bold text-gray-900"> Cart Items</h5>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        View all
                    </a>
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
            </div>
            <div>
                <button className="font-medium bg-blue-700 px-2 py-2.5">Remove</button>
            </div>
        </div>
    )
}
