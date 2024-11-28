import React from "react";
import img1 from "../assets/reach.jpg";
import img2 from "../assets/deliver.jpg";

const Standards = () => {
  return (
    <div className="grid grid-cols-2 px-20 gap-20 max-lg:grid-cols-1 max-md:px-10">
      <div className="left flex-col flex gap-5">
        <div className="h-[600px] rounded-xl bg-[url('./assets/reach.jpg')] img"></div>
        {/* <img className="h-[400px]" src={img1} alt="" /> */}
        <div className="contbelow py-10">
          <span className="font-['quicksand'] text-[24px] leading-[20px]">
            Moving House Starts Here – Compare Quotes from Quality Removalists &
            Transporters, Browse Reviews and Book Online.
          </span>
        </div>
      </div>
      <div className="right">
        <div className="title font-['quicksand'] text-[42px] leading-[40px]">
          Setting New Standards in the Moving Industry
        </div>
        <div className="somecont py-8">
          Find a Mover is built for moves of all shapes and sizes. Whether you
          are moving house local or interstate, moving your office or just
          moving a single item, Find a Mover has you covered.
        </div>
        <div className="grid-cols-2 grid gap-5 justify-between py-10">
          <div className="rating col-span-1">
            <div className="big font-['quicksand'] text-[50px]">
              9.2 <span className="text-[#fe5a50]">%</span>
            </div>
            <div className="content">
              Our customer satisfaction rate stands at an impressive
            </div>
          </div>
          <div className="moves col-span-1">
            <div className="big font-['quicksand'] text-[50px]">
              140k<span className="text-[#fe5a50]">+</span>
            </div>
            <div className="content">
              Moves completed. Helping families and businesses to their new
              destinations
            </div>
          </div>
        </div>
        <div className="h-[400px] rounded-xl bg-[url('./assets/deliver.jpg')] bg-top"></div>
      </div>
    </div>
  );
};

export default Standards;
