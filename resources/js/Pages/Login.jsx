import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../Shared/Layout';
import Input from "../components/Input";

function Login(props) {
    console.log('props =>', props);
    return (
        <div title="Log in" className="container-fluid">
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
                    <form>
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="billy@example.com"
                        className="mb-4"
                        v-model="form.email"
                    errors="$page.errors.email"
                     autofocus
                />
                <Input
                    label="Password"
                    name="password"
                    placeholder="••••••"
                    type="password"
                    v-model="form.password"
                errors="$page.errors.email"
                 className="mb-6"
            />
            <div className="flex justify-end">
                <button type="submit" className="button">
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
