import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import Image from '../../assets/style/signin-images/Image1.png';
import '../../assets/style/LoginForm.css'


const LoginForm = () => {
    const history = useHistory()

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmail = (e) => {
        setEmailError('');
        setEmail(e.target.value);
    }

    const handlepassword = (e) => {
        setPasswordError('');
        setPassword(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        //check if email is empty
        if (email !== '') {
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (emailRegex.test(email)) {
                setEmailError('');
                if (email === 'admin@andela.com') {
                    setEmailError('');
                    if (password === 'test123') {
                        history.push('/new')

                    } else {
                        setPasswordError('Password does not match with Email address');
                    }
                } else {
                    setEmailError('Email does not match');
                }
            } else {
                setEmailError('Invalid Email');
            }
        } else {
            setEmailError('Email required')
        }
        if (password !== '') {

        } else {
            setPasswordError('Password required')
        }
        
    }
    return (
        <div className='lg:flex md:flex h-screen bg-white'>
            <div className="lg:w-5/12 md:w-7/12 w-full lg:flex md:flex lg:flex-col md:flex-col lg:items-center md:items-center">
                <div className="w-full letfSide_back-color h-screen py-10 px-1">
                    <blockquote className="text-2xl font-medium text-center lg:mt-24 md:mt-20 mt-12">
                        <p className="color-h1 text-4xl lg:text-4xl md:text-2xl font-bold font-sans leading-10">Phantom</p>
                    </blockquote>

                    <div className="text-primary m-6">
                        <div className="flex items-center mt-3 justify-center">
                            <h1 className="text-xl md:text-2xl font-sans font-medium text-primary mt-0 mb-6 text-white">
                                Sign In
                            </h1>
                            <a href=""><span className="iconify w-8 h-9 absolute lg:-ml-60 md:-ml-40 lg:-mt-36 md:-mt-32 -ml-44 -mt-32" data-icon="akar-icons:arrow-left"></span></a>
                        </div>
                        <form onSubmit={handleFormSubmit} className="md:w-full md:-ml-6">
                            <input
                                type="text"
                                placeholder="Email"
                                onChange={handleEmail} value={email}
                                className={
                                    "lg:w-3/4  w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 lg:ml-16 md:ml-6"} />
                            {emailError && <div className="lg:ml-16 md:ml-7 text-red-600 text-sm">{emailError}</div>}

                            <input
                                type="password"
                                onChange={handlepassword} value={password}
                                placeholder="Password"
                                className={
                                    "lg:w-3/4 w-full lg:ml-16 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 md:ml-6"} />
                            {passwordError && <div className="lg:ml-16 md:ml-7 text-red-600 text-sm">{passwordError}</div>}
                            <p className="font-sans font-medium lg:ml-16 md:ml-6 justify-center text-blue-500"><a href="">Forget Password?</a></p>

                            <div className="flex items-center mt-6">
                                <button
                                    className={
                                        "bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded lg:ml-16 md:ml-6 lg:w-3/4 w-full"
                                    }
                                    value="Login">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center mt-3 lg:w-3/4 md:w-full">
                            <button className={"text-blue-500 lg:ml-10 md:ml-0"}>
                                <p className="paragraph_bg_Color font-sans font-medium">Dont have an account yet?<a href="">Sign Up</a></p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white bg-no-repeat bg-center bg-cover w-3/5h-screen relative">
                <figure>
                    <img className="lg:block md:block lg:mt-8 md:mt-28 lg:mb-8 mr-auto lg:w-11/12 lg:h-4/5 hidden" src={Image} alt="" />
                    <figcaption className="hidden lg:block md:block lg:absolute md:absolute lg:top-1/2 md:top-1/2 lg:left-1/2 md:left-1/2 lg:right-0 md:right-0 lg:bottom-0 md:bottom-0">  <h3 className="color-h1 font-sans font-bold leading-10 lg:text-4xl md:text-2xl lg:mb-2 md:mb-1 lg:mt-5 md:mt-7 not-italic">Fast and easy movement !</h3>
                        <p className="right_side_content font-sans not-italic font-medium leading-10 md:text-base md:mt-2 lg:mt-4 mt-8">Get notified anytime, anywhere bus is.Get notified anytime, anywhere bus is.Get notified anytime, anywhere bus is.Get notified anytime, anywhere bus is.</p></figcaption>
                </figure>
            </div>
        </div>
    )
}

export default LoginForm
