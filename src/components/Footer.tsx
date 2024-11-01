import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='text-[#21243D] w-full h-auto pb-16 flex flex-col items-center justify-center gap-4'>
      <div className='flex gap-3 xs:text-[22px] text-[24px]'>
        <FaFacebookSquare/>
        <FaInstagram/>
        <FaTwitter/>
        <FaLinkedin/>
      </div>
      <p className='font-heebo xs:text-[18px] lg:text-[22px] font-medium'>Copyright ©2020 All rights reserved </p>
    </div>
  )
}

export default Footer
  