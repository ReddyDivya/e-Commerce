import React from 'react'

export default function CartItem({ item }) {
    return (
        <div>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={item.media} alt="item" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dar:text-white">{item.name}</p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <p>{item.line_total.formatted_with_symbol}</p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <button className="bg-blue-700 font-medium px-5 py-2.5 items-center">+</button>
                        <p>{item.quantity}</p>
                        <button className="bg-blue-700 font-medium px-5 py-2.5 items-center">-</button>
                    </div>
                </div>
            </li>
        </div>
    )
}
