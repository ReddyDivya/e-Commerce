import React from 'react'

export default function Product() {
    return (
        <div className="m-2 max-w-sm bg-white overflow-hidden rounded-lg border border-gray-200 shadow-lg hover:bg-gray-100">
            <img className="p-6 rounded-t-lg" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <article className="prose lg:prose-xl">
                <h1 className="text-gray-900 dark:text-white">Head Phones</h1>
                <p className="">
                    Maono Au-Mh601S Wired Over Ear Studio Headphones with Mic, Stereo Monitor Closed Back Headsets with Detachable Cable and 50Mm Driver for Dj, Recording Studio,
                </p>
            </article>
        </div>
    )
}
