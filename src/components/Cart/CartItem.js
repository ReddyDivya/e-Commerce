import React from 'react'

export default function CartItem({ item, onUpdateCartQty, onRemovefromCart }) {

    return (
        <div>
            <li className="py-3 sm:py-4 items-center">
                <div className="flex items-center">
                    <div className="flex-0">
                        <img className="w-8 h-8 rounded" src={item.image.url} alt={item.name} />
                    </div>
                    <div className="flex-1 m-4 p-2">
                        <p className="text-sm font-bold text-gray-900 dar:text-white">{item.name}</p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <p className="p-4">{item.line_total.formatted_with_symbol}</p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <button className="bg-blue-700 font-bold p-4 items-center rounded-full text-white" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                        <p className="p-3">{item.quantity}</p>
                        <button className="bg-blue-700 font-bold p-4 items-center rounded-full text-white" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                    </div>
                    <div className="m-3">
                        <button className="font-medium bg-red-700 px-2 py-2.5 rounded text-white" onClick={() => onRemovefromCart(item.id)}>Remove</button>
                    </div>
                </div>
            </li>
        </div >
    )
}
