import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import React from "react";
import find from '../assets/removalists.webp'

const FindaMover = () => {
  return (
    <div className="find grid grid-cols-2  border border-y-gray-300 gap-10 px-20 pt-40">
      <div className="text">
        <div className="title font-['quicksand'] text-[50px] leading-[45px] font-[900]">
          How does Find a Mover work?
        </div>
        <div className="content py-10">
          Kickstart your moving journey with Find a Mover by telling us about
          your house moving requirements. We'll get to work matching you with
          our professional house movers that best fit your needs. They will then
          provide you with competitive quotes for your review. Start your
          stress-free removal experience with Find a Mover today!
        </div>
        <div className="img">
            <img className="h-[500px] ml-auto" src={find} alt="" />
        </div>
      </div>
      <div className="cards relative">
        <div className="drop-shade h-[130px] items-center rounded-lg gap-5 flex p-5">
          <div className="w-20 h-full rounded-lg bg-[#2b3457] text-white justify-center items-center flex text-3xl">
            <RiNumber1 />
          </div>
          <div className="cont w-[80%]">
            <div className="head font-[900] text-[24px]">
              Tell us about your move
            </div>
            <div className="co leading-[14px] text-[14px] font-[200] text-gray-400">
              In less than a few minutes, tell us what you need moved, where you
              need it moved to and when you need it done.
            </div>
          </div>
        </div>

        <div className="drop-shade h-[130px] items-center rounded-lg gap-5 flex p-5">
          <div className="w-20 h-full rounded-lg bg-[#2b3457] text-white justify-center items-center flex text-3xl">
            <RiNumber2 />
          </div>
          <div className="cont w-[80%]">
            <div className="head font-[900] text-[24px]">
              Compare quotes from removalists
            </div>
            <div className="co leading-[14px] text-[14px] font-[200] text-gray-400">
              Moving companies ranging from independent house movers to large
              well known removal companies then place quotes to win your
              business.
            </div>
          </div>
        </div>

        <div className="drop-shade h-[130px] items-center rounded-lg gap-5 flex p-5">
          <div className="w-20 h-full rounded-lg bg-[#2b3457] text-white justify-center items-center flex text-3xl">
            <RiNumber3 />
          </div>
          <div className="cont w-[80%]">
            <div className="head font-[900] text-[24px]">
              Choose your favourite mover
            </div>
            <div className="co leading-[14px] text-[14px] font-[200] text-gray-400">
              You can then select a quote based on the feedback and reviews of
              the mover, their availability, and their quoted price.
            </div>
          </div>
        </div>

        <div className="drop-shade h-[130px] items-center rounded-lg gap-5 flex p-5">
          <div className="w-20 h-full rounded-lg bg-[#2b3457] text-white justify-center items-center flex text-3xl">
            <RiNumber4 />
          </div>
          <div className="cont w-[80%]">
            <div className="head font-[900] text-[24px]">Leave a Review</div>
            <div className="co leading-[14px] text-[14px] font-[200] text-gray-400">
              Help out the community by leaving a review of your experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindaMover;
