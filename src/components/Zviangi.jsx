import React from 'react';

export default function Zviangi() {
  return (
    <div className="bg-black">
      <div className="p-8 container">
        <div className="flex flex-wrap justify-between items-start w-full mb-8 text-left">
          <div className="w-[150px] m-4 text-white flex flex-col">
            <h4 className="text-[16px] leading-[17px] mb-3.5">For Turtles</h4>
            <a href="/Home" className="text-[#afafb3] hover:underline text-[14px] leading-[15px] my-3 cursor-pointer">Home</a>
            <a href="/About" className="text-[#afafb3] hover:underline text-[14px] leading-[15px] my-3 cursor-pointer">About</a>
            <a href="/Contact" className="text-[#afafb3] hover:underline text-[14px] leading-[15px] my-3 cursor-pointer">Contact</a>
            <a href="/FAQ" className="text-[#afafb3] hover:underline text-[14px] leading-[15px] my-3 cursor-pointer">FAQ</a>
          </div>
          <div className="w-[150px] m-4 text-white flex flex-col">
            <h4 className="text-[16px] leading-[17px] mb-3.5">Legal</h4>
            <a href="/Terms" className="text-[#afafb3] hover:underline text-[14px] leading-[15px] my-3 cursor-pointer">Terms</a>
            <a href="/Privacy" className="text-[#afafb3] hover:underline text-[14px] leading-[15px] my-3 cursor-pointer">Privacy</a>
          </div>
          <div className="w-[150px] m-4 text-white flex flex-col">
            <h4 className="text-[16px] leading-[17px] mb-3.5">More Info</h4>
            <a href="/term" className="text-[#afafb3] hover:underline text-[14px] leading-[15px] my-3 cursor-pointer">Terms & Conditions</a>
            <a href="/security" className="text-[#afafb3] hover:underline text-[14px] leading-[15px] my-3 cursor-pointer">Security</a>
            <a href="/cookie" className="text-[#afafb3] hover:underline text-[14px] leading-[15px] my-3 cursor-pointer">Cookie Declaration</a>
          </div>
        </div>
        <hr className="border-t border-white w-full" />
        <div className="flex flex-col sm:flex-row justify-between mt-1">
          <div>
            <p className="text-[13px] leading-[15px] text-white font-semibold">&#64;{new Date().getFullYear()} Sea Turtles All Rights Reserved @Shio Elikashvili</p>
          </div>
          <div className="flex flex-col sm:flex-row mt-4 sm:mt-0">
            <a href="/term" className="text-[13px] leading-[15px] text-white font-semibold sm:ml-8 mt-4 sm:mt-0">Terms & Conditions</a>
            <a href="/privacy" className="text-[13px] leading-[15px] text-white font-semibold sm:ml-8 mt-4 sm:mt-0">Privacy</a>
            <a href="/security" className="text-[13px] leading-[15px] text-white font-semibold sm:ml-8 mt-4 sm:mt-0">Security</a>
            <a href="/cookie" className="text-[13px] leading-[15px] text-white font-semibold sm:ml-8 mt-4 sm:mt-0">Cookie Declaration</a>
          </div>
        </div>
      </div>
    </div>
  );
}
