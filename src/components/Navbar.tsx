import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-[8vh] w-full flex justify-end p-14">
      <div
        className=" flex gap-x-7   text-[20px] font-inter"  >
        <Link href={""} className="text-black left-[129.4px]">
          Work
        </Link>
        <Link href={""} className="text-black left-[129.4px] ">
          Blog
        </Link>
        <Link href={""} className="text-black left-[129.4px] ">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
