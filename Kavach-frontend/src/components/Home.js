import React, { useState, useEffect } from 'react'
import Navigation from './Navigation';
import MyChatBot from './MyChatBot'
import mainPagePhoto from '../assets/intropage.png'
import { Link } from 'react-router-dom';
import Loading from './Loading';

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati quis, dignissimos minus sapiente explicabo animi atque. Repudiandae, eligendi!";
const buttonText = "Learn More";

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {(loading) ? (
                <Loading />
            ) : (
                <div className=' font-epilogue bg-[hsl(0,0%,98%)]'>
                    <MyChatBot />
                    <div className=' flex flex-col'>
                        <Navigation />
                        <img src={mainPagePhoto} alt="image-hero-mobile" className='lg:hidden mt-20' />
                        <div className=' lg:flex lg:mx-40'>
                            <img src={mainPagePhoto} alt="image-hero-desktop" className='hidden mt-[110px] lg:flex lg:order-2 lg:w-full lg:h-full overflow-auto' />
                            <div className='mb-[100px] lg:pt-[120px] lg:pr-32'>
                                <div className=" flex flex-col items-center lg:items-start">
                                    <h1 className="text-4xl font-bold text-black lg:text-6xl">Enhance Your <span className='cursor-pointer text-[#608CFE]'>eKYC</span> Process</h1>
                                    <p className=" text-center lg:text-start lg:pr-11 text-base lg:text-lg my-6 text-[hsl(0,0%,41%)] font-medium">
                                        {text}
                                    </p>
                                    <div className="cursor-pointer text-white bg-[#608CFE] hover:bg-transparent hover:scale-110 hover:border hover:text-[#608CFE] hover:border-[#608CFE] transition duration:1000 py-3 px-6 rounded-xl">
                                        <Link to="/about" className="text-base font-medium">{buttonText}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    )
}

export default Home