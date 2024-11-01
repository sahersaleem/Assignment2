import React from "react";

const Card = () => {
  return (
    <div className="lg:w-[483px] h-auto bg-[#FFFFFF] p-6">
      <h1 className="font-heebo text-[26px] font-bold text-black">
        Making a design system from scratch
      </h1>
      <div className="flex flex-row text-[#000000] font-heebo text-[18px] mt-6">
        <p className="pr-10 border-r border-[#000000] font-normal">12 Feb 2020</p> 
        <p className="pl-10 font-normal">Design pattern</p>
      </div>
      <p className="lg:text-[16px] mt-6 text-[#000000] lg:text-base">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
  );
};

const RecentPost = () => {
  return (
    <div className="bg-[#F4E2E2] h-auto w-full flex justify-center items-center pb-24 p-10">
      <div className=" flex items-center flex-col justify-center space-y-5">
        <div className="w-full justify-center items-center pt-20 ">
          <div className="flex justify-between">
            {" "}
            <h1 className="text-black font-heebo text-[22px] font-medium ">
              Recent Post
            </h1>
            <h1 className="text-[#F98585] font-heebo text-[22px] font-medium  ">
              View All
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center xs:flex-col lg:flex-row xs:space-y-5 lg:space-y-0 lg:space-x-9">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
