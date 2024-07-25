import React, { useEffect, useState } from "react";
import aboutPhoto from '../assets/aboutphoto.png'
import Navigation from "./Navigation";
import MyChatBot from "./MyChatBot";
import Loading from "./Loading";

export const About = () => {
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
                <>
                    <MyChatBot />
                    <Navigation />
                    <section
                        className="relative rounded-[15px] p-[50px] pt-[20px] z-[1]"
                        id="about"
                    >
                        <div className="block relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#608CFE] before:origin-center before:h-[3px] before:w-[1%] hover:before:w-[10%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#608CFE] after:origin-center after:h-[3px] after:w-[1%] hover:after:w-[10%] after:bottom-0 after:right-[50%]">
                            <h2 className="text-center text-[35px] font-bold uppercase ">
                                About Us
                            </h2>
                        </div>
                        <div className='block px-[40px] mb-[50px]'>

                            <div className="items-center lg:items-start">
                                <span className="group transition-all duration-300 ease-in-out">
                                    <h4 className="pb-[4px] bg-left-bottom bg-gradient-to-r from-[#608CFE] to-[#608CFE] bg-[length:20%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out inline-block text-3xl font-bold ">Our Mission</h4>
                                </span>
                                <p className="lg:text-justify lg:pr-11 text-base lg:text-lg my-6 text-[hsl(0,0%,41%)] font-medium">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aspernatur quae veniam iste ea cumque quis, adipisci odit exercitationem aliquam?
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aspernatur quae veniam iste ea cumque quis, adipisci odit exercitationem aliquam?
                                </p>
                                <span className="group transition-all duration-300 ease-in-out">
                                    <h4 className="pb-[4px] bg-left-bottom bg-gradient-to-r from-[#608CFE] to-[#608CFE] bg-[length:20%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out inline-block text-3xl font-bold ">Our Vision</h4>
                                </span>
                                <p className="lg:text-justify lg:pr-11 text-base lg:text-lg my-6 text-[hsl(0,0%,41%)] font-medium">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aspernatur quae veniam iste ea cumque quis, adipisci odit exercitationem aliquam?
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aspernatur quae veniam iste ea cumque quis, adipisci odit exercitationem aliquam?
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center px-[40px]">
                            <img
                                src={aboutPhoto}
                                alt="About Us"
                                style={{
                                    height: "500px"
                                }}
                            />
                            <ul className="text-[var(--color-text)] pl-[80px] flex flex-col gap-[30px] ">
                                <li className="flex flex-row h-[150px] items-center rounded-[20px] list-none p-[20px] bg-[#608CFE] bg-no-repeat bg-0%_100% hover:bg-100%_100% transition duration-400">
                                    {/* <i className="fa-solid fa-lock"></i> */}
                                    <div className="ml-4">
                                        <h3 className="text-[20px] font-semibold">Frontend Developer</h3>
                                        <p className="text-[20px]">
                                            I'm a frontend developer with experience in building responsive
                                            and optimized sites
                                        </p>
                                    </div>
                                </li>
                                <li className="flex flex-row h-[150px] items-center rounded-[20px] list-none p-[20px] bg-[#608CFE] bg-no-repeat bg-0%_100% hover:bg-100%_100% transition duration-400">
                                    <div className="ml-4">
                                        <h3 className="text-[20px] font-semibold">Backend Developer</h3>
                                        <p className="text-[20px]">
                                            I have experience developing fast and optimized back-end systems
                                            and APIs
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <ul className="text-[var(--color-text)] pl-[30px] flex flex-col gap-[30px] ">
                                <li className="flex flex-row h-[150px] items-center rounded-[20px] list-none p-[20px] bg-[#608CFE] bg-no-repeat bg-0%_100% hover:bg-100%_100% transition duration-400">
                                    <div className="ml-4">
                                        <h3 className="text-[20px] font-semibold">UI Designer</h3>
                                        <p className="text-[20px]">
                                            I have designed multiple landing pages and have created design
                                            systems as well
                                        </p>
                                    </div>
                                </li>
                                <li className="flex flex-row h-[150px] items-center rounded-[20px] list-none p-[20px] bg-[#608CFE] bg-no-repeat bg-0%_100% hover:bg-100%_100% transition duration-400">
                                    <div className="ml-4">
                                        <h3 className="text-[20px] font-semibold">UI Designer</h3>
                                        <p className="text-[20px]">
                                            I have designed multiple landing pages and have created design
                                            systems as well
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};
