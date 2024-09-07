import React from 'react'
import Link from 'next/link';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import images from  "../../asset/index"
const Login = () => {
    return (
        <div>
            <div className="min-h-screen flex">
                {/* Left Side: Form Section */}
                <div className="flex flex-col justify-center items-start w-1/2 px-16 bg-[#0D0E12]">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Hello, <span style={{
                            background: 'linear-gradient(45deg, #4D62E5 0%, #87DDEE 45.31%, #B6F09C 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>Digital Fortress</span>
                    </h1>
                    <p className="text-gray-400 mb-8">
                        Log in to platform to start creating magic.
                    </p>
                    <form className="space-y-5 w-full">
                        {/* Email Input */}
                        <div className="relative">
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="candidate.digitalfortress@gmail.com"
                                className="w-full py-3 pl-10 pr-4 bg-[#16181D] text-white rounded-md border border-transparent focus:border-gradient-focus"
                            />
                            <span className="absolute left-3 top-3.5 text-gray-500">
                                <MdOutlineEmail />
                            </span>
                        </div>

                        {/* Password Input */}
                        <div className="relative focus:border-gradient-focus">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="w-full py-3 pl-10 pr-4 bg-[#16181D] text-white rounded-md border border-transparent focus:border-[#50b8ec] focus:focus:border-gradient-focus hover:border-gradient"
                            />
                            <span className="absolute left-3 top-3.5 text-gray-500">
                                <RiLockPasswordLine />
                            </span>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember-me"
                                    className="h-4 w-4 text-[#50b8ec] focus:ring-[#50b8ec] border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-400">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-sm text-[#50b8ec] hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <div>
                            <Buttons />
                        </div>
                    </form>

                    {/* Sign Up Link */}
                    <p className="text-center text-gray-400 mt-6">
                        Don’t have an account?{' '}
                        <a href="#" className="text-[#50b8ec] hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>

                {/* Right Side:*/}
                <div className="w-1/2 bg-cover bg-center relative"  style={{ backgroundImage: `url(${images.login.src})`  }}>
                    <div className="absolute inset-0 flex items-end p-8">
                        <blockquote className="text-white">
                            <p className="text-lg font-semibold">
                                “Digital Fortress has been a game-changer for our content creation process.”
                            </p>
                            <p className="mt-2">
                                The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.
                            </p>
                            <footer className="mt-4 text-sm">
                                Lily Alisson<br />
                                <span className="text-gray-400">CMO at Digital Fortress</span>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Buttons() {
    return (
        <div className="">
            {(
                <Link href="/dashboard">
                    <button
                        aria-label="Dashboard"
                        type='submit'
                        className="w-full py-3 bg-[#B6F09C] text-white rounded-md hover:bg-[#3fa5d9] transition duration-300">
                        Login
                    </button>
                </Link>
            )}
        </div>
    );
}
export default Login