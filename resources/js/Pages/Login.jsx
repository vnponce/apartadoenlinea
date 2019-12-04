import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Layout from '../Shared/Layout';
import Input from "../components/Input";
import {Inertia} from "@inertiajs/inertia";
import {usePage} from "@inertiajs/inertia-react";

export function triggerEvtInput(target, value) {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        'value'
    ).set;
    nativeInputValueSetter.call(target, value);

    const ev2 = new Event('input', { bubbles: true });
    target.dispatchEvent(ev2);
}

/**
 * @return {boolean}
 */
export function LOGIN_MOCK_DEV_ONLY(evt) {
    console.log('LOGIN_MOCK_DEV_ONU');
    const target = evt.currentTarget;
    console.log('target =>', target);
    // if (process.env.NODE_ENV === 'development') {
        if (
            // process.env.REACT_APP_LOGIN_MOCK_USER &&
            // process.env.REACT_APP_LOGIN_MOCK_PASSWORD &&
            evt.key === 'Tab'
        ) {
            evt.preventDefault();
            if (target.id === 'email') {
                triggerEvtInput(target, 'god@panaderialaespecial.com.mx');
                document.querySelector('#password').focus();
            } else {
                triggerEvtInput(target, 'secret');
                const form = document.querySelector('#login-form');
                console.log('form =>', form);
                setTimeout(() => form.dispatchEvent(new Event('submit', { bubbles: true })), 600);
            }
            return false;
        }
    // }

    return true;
}

function Login(props) {
    console.log('props =>', props);
    const [data, setData] = useState({});
    const { errors } = usePage();
    console.log('errors =>', errors);
    console.log('errors.length =>', length);
    const login = e => {
        console.log('login con data =>', data);
        e.preventDefault();
        Inertia.post('/login', data);
    };
    const handleInput = e => {
        console.log('e.target =>', e.target);
        const { name, value } = e.target;
        console.log('e.target.name =>', e.target.name);
        console.log('e.target.value =>', e.target.value);
        setData({
            ...data,
            [name]: value,
        });
    };
    return (
        <div title="Log in" className="container-fluid">
            {console.log('data =>', data)}
            <div className="max-w-sm mx-auto mt-24 mb-8">
                {/*
                <svg className="w-24 mb-8 mx-auto" viewBox="0 0 114 114" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="0%" y1="50%" y2="50%" id="a">
                            <stop stopColor="#9553E9" offset="0%" />
                            <stop stopColor="#6D74ED" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <path
                            d="M57 114C25.52 114 0 88.48 0 57S25.52 0 57 0s57 25.52 57 57-25.52 57-57 57zm0-2c30.376 0 55-24.624 55-55S87.376 2 57 2 2 26.624 2 57s24.624 55 55 55zm0-3C28.281 109 5 85.719 5 57S28.281 5 57 5s52 23.281 52 52-23.281 52-52 52z"
                            fill="url(#a)"
                        />
                        <path
                            d="M45.8 40L63 57.2 45.8 74.4H28l17.2-17.2L28 40h17.8zm26.9 0l17.2 17.2-17.2 17.2H54.9l17.2-17.2L54.9 40h17.8z"
                            fill="#FFF"
                            fillRule="nonzero"
                        />
                    </g>
                </svg>
                */}
                <img src="/Logo-Short.svg" className="w-24 mb-8 mx-auto" alt=""/>
                <div className="bg-white shadow px-8 py-12">
                    <form id="login-form">
                        <Input
                            value={data.email}
                            label="Email"
                            id="email"
                            type="email"
                            placeholder="billy@example.com"
                            className="mb-4"
                            // errors="$page.errors.email"
                            onChange={handleInput}
                            autofocus
                            onKeyDown={LOGIN_MOCK_DEV_ONLY}
                        />
                        {errors.email && <p className="text-sm m-auto text-red-500 error hour">{errors.email[0]}</p>}
                        <Input
                            label="Password"
                            value={data.password}
                            id="password"
                            placeholder="••••••"
                            type="password"
                            // errors="$page.errors.email"
                            className="mb-6"
                            onChange={handleInput}
                            onKeyDown={LOGIN_MOCK_DEV_ONLY}
                        />
                        {errors.password && <p className="text-sm m-auto text-red-500 error hour">{errors.password[0]}</p>}
                        <label className="mt-6 select-none flex items-center" htmlFor="remember">
                            <input id="remember" className="mr-1" type="checkbox" />
                            <span className="text-sm">Remember Me</span>
                        </label>
                        <div className="flex justify-end">
                            <button type="submit" className="button" onClick={login}>
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;