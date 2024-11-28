import { CiStar } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineTimer } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import React from "react";

const WhyFind = () => {
  return (
    <div className="flex flex-col gap-5 px-20 py-32 max-md:px-10 max-sm:px-5">
      <div className="why text-[50px] max-md:text-[38px] font-['quicksand'] leading-[46px]">Why Use Find a Mover?</div>
      <div className="toptitle">
        <div className="title text-[32px] leading-[32px] w-[80%] font-['quicksand'] max-lg:w-full max-md:text-[24px] max-md:leading-[24px]">
          Find a Mover transforms the often daunting task of finding a
          removalist into a simplified, seamless experience
        </div>
        <div className="topcontent w-[60%] py-5 text-[20px] text-gray-400 max-lg:w-full max-md:text-[16px] ">
          We connect you with a broad network of professional and reputable
          removal companies, enabling you to conveniently compare competitive
          quotes and make an informed decision based on our authentic customer
          reviews. Whether you're planning a local or interstate move, Find a
          Mover is here to help get your move started.
        </div>
      </div>
      <div className="grid grid-cols-4 gap-16 max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:gap-8">

        <div className="flex flex-col gap-3 max-md:gap-1 col-span-1">
          <div className="box flex justify-center items-center text-white bg-[#2b3457] rounded-lg w-16 h-16 max-md:size-14">
            <MdOutlineTimer size={30} />
          </div>
          <div className="font-['quicksand'] text-[24px] title  max-md:text-[18px] ">It Saves Time</div>
          <div className="content max-md:text-[12px]">
            Save time by not having to ring around chasing up quotes. Companies
            come to you.
          </div>
        </div>

        <div className="flex flex-col gap-3 max-md:gap-1 col-span-1">
          <div className="box flex justify-center items-center text-white bg-[#2b3457] rounded-lg w-16 h-16 max-md:size-14">
            {/*<MdAttachMoney />*/}
            <GiTakeMyMoney size={30} />
          </div>
          <div className="font-['quicksand'] text-[24px] title  max-md:text-[18px]">You Can Save Money</div>
          <div className="content max-md:text-[12px]">
            With the ability to compare up to 7 quotes, you'll be sure to find a
            good deal.
          </div>
        </div>

        <div className="flex flex-col gap-3 max-md:gap-1 col-span-1">
          <div className="box flex justify-center items-center text-white bg-[#2b3457] rounded-lg w-16 h-16 max-md:size-14">
            <CiStar size={30} />
          </div>
          <div className="font-['quicksand'] text-[24px] title  max-md:text-[18px]">
            Find a Quality Mover
          </div>
          <div className="content max-md:text-[12px]">
            By comparing quotes, reviewing mover profiles and feedback, find the
            perfect mover for your job.
          </div>
        </div>

        <div className="flex flex-col gap-3 max-md:gap-1 col-span-1">
          <div className="box flex justify-center items-center text-white bg-[#2b3457] rounded-lg w-16 h-16 max-md:size-14">
            <FaRegThumbsUp size={30} />
          </div>
          <div className="font-['quicksand'] text-[24px] title  max-md:text-[18px]">
            We're a Free Service
          </div>
          <div className="content max-md:text-[12px]">
            We are completely free to use and we're a no obligation service.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyFind;
