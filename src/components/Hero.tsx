import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full xs:mt-28 lg:mt-52 h-auto pb-24 text-black  flex justify-center xs:flex-col lg:flex-row xs:space-y-10 lg:space-y-0 lg:space-x-48 items-center overflow-x-hidden xs:pl-10 xs:pr-10 ">
      <div className="xs:flex justify-center flex-col items-center lg:block">
        <h1 className="xs:text-3xl font-heebo font-bold lg:text-5xl xs:text-center lg:text-left">Hi , I am John , </h1>
        <h1 className="xs:text-3xl lg:text-5xl font-heebo font-bold xs:text-center lg:text-left">Creative Technologists</h1>
        <p className="lg:w-[497px] lg:h-[66px] text-[16px] text-base font-heebo font-normal top-[402px] left-[231px] mt-5 xs:text-center lg:text-left">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button className="bg-[#F98585] xs:mt-8 lg:mt-7 text-white px-4 py-2 shadow-lg rounded-sm font-heebo">Download Resume</button>
      </div>
      <div className="flex justify-center items-center">
     <Image src={"/image1.png"} alt="man" width={298} height={308}/>
      </div>
    </div>
  );
};

export default Hero
