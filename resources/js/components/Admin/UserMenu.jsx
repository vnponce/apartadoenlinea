import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

export default function UserMenu(props) {
    const { user } = props;
    return (
        <div className="flex relative inline-block pr-6">

            <div className="relative text-sm">
                <button id="userButton" className="flex items-center focus:outline-none mr-3">
                    {/* <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" */}
                    <img className="w-8 h-8 rounded-full mr-4" src={user.avatar}
                         alt="Avatar of User" />
                    <span
                        className="hidden md:inline-block">Hola, {user.name}
                                             </span>
                    <svg className="pl-2 h-2" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 129 129"
                         enableBackground="new 0 0 129 129">
                        <g>
                            <path
                                d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                        </g>
                    </svg>
                </button>
                <div id="userMenu"
                     className="bg-white nunito rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
                    <ul className="list-reset">
                        {/*
                        <li><a href="#"
                               className="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline">My
                            account</a></li>
                        <li><a href="#"
                               className="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline">Notifications</a>
                        </li>
                        <li>
                            <hr className="border-t mx-2 border-gray-400" />
                        </li>
                        */}
                        <li>
                            <InertiaLink href="/logout"
                               className="px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline">
                                Logout
                            </InertiaLink>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
};
