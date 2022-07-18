import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import isEmail from 'validator/lib/isEmail';



const Auth: NextPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState();

    const createUser = () => {

    }

    

    return (
        <div>
            <Head>
                <title>Auth page!</title>
                <meta name="auth" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/hackathon lohgo.png" />
            </Head>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white border-t-4 border-purple-600 rounded-md shadow-md border-top lg:max-w-md">
                    <h1 className="text-3xl font-semibold text-center text-purple-700">LOGO</h1>
                    <form className="mt-6">
                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
                            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className='mt-4'>
                            <div>
                                <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                                <input type="password" placeholder="password" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <a href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
                                {/* Change the <a> tag to the link */}
                                <div>
                                    <button type="submit" onClick={logInUser()} className="block w-full px-4 py-2 mt-4 text-white bg-purple-600 border border-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-purple-300 focus:ring focus:ring-opacity-40">
                                        Log In
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <p className="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account?
                        <button onClick={createUser()} className="font-medium text-purple-600 hover:underline"> Sign up</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Auth