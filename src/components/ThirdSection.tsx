import Image from "next/image";
import React from "react";

const Card = ({ imgUrl }:{imgUrl:string}) => {
  return (
    <div className="flex justify-center lg:space-x-10 xs:flex-col lg:flex-row xs:items-center lg:items-start">
      <Image src={imgUrl} alt="image" width={246} height={180} />
      <div>
        <h1 className="font-heebo font-bold xs:text-xl lg:text-3xl text-[#000000] xs:text-center lg:text-left">
          Designing Dashboards
        </h1>
        <p className="text-[#000000] font-heebo font-light xs:text-base lg:text-lg lg:w-[622px] xs:text-center lg:text-left">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <div className="w-full h-auto pb-24 flex justify-center items-center flex-col pt-24 xs:pl-10 xs:pr-10">
  
      <div>
        <h1 className="font-medium text-lg text-[#000000] pb-10 xs:text-center lg:text-left">Featured Work</h1>
    

      <div className="flex flex-col justify-center items-center gap-28">
        <Card imgUrl={"/image2.png"} />
        <Card imgUrl={"/image3.png"} />
        <Card imgUrl={"/image4.png"} />
      </div>
      </div>
    </div>
  );
};

export default ThirdSection;
