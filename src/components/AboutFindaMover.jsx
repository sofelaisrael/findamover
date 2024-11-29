import gsap from "gsap";
import React, { useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { FaTruckLoading } from "react-icons/fa";
import { SlHourglass } from "react-icons/sl";
import { CgSmileMouthOpen } from "react-icons/cg";
import { BsTruck } from "react-icons/bs";
import { BiCalendarCheck } from "react-icons/bi";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";

const AboutFindaMover = () => {
  useEffect(() => {
    const all = document.querySelectorAll(".naag");
    all.forEach((naag) => {
      naag.onmouseenter = (e) => {
        const clippath = naag.querySelector(".in");
        const rect = clippath.getBoundingClientRect();

        clippath.style.visibility = "visible";

        gsap.to(clippath, 0.3, {
          visibility: "visible",
          clipPath: `circle(150% at ${e.x - rect.left}px ${e.y - rect.top}px)`,
        });
      };

      naag.onmouseleave = (e) => {
        const clippath = naag.querySelector(".in");
        const rect = clippath.getBoundingClientRect();

        gsap.to(clippath, 0.5, {
          clipPath: `circle(0% at ${e.x - rect.left}px ${e.y - rect.top}px)`,
        });
        setTimeout(() => {
          clippath.style.visibility = "hiddenx";
        }, 1000);
      };
    });
    // document.querySelector(".naag").onmouseenter = (e) => {};
  });

  return (
    <div className="grid grid-cols-3 place-items-center gap-10 p-20 max-lg:grid-cols-2 max-md:p-5 max-sm:grid-cols-1">

      <div className="box">
        <div className="naag rounded-lg overflow-hidden flex flex-col justifyenter ems-center h-[300px] relative border-black b">
          <div className="absolute left-0 translate-x-[0%] -translate-y-1/2 top-[50%] w-full in bg-[#2b3457]  flex px-5 h-[300px] flex-col py-16">
            <div className="flex gap- flex-col text-white">
              <span>
                <BiCalendarCheck
                  size={170}
                  className="absolute top-5 right-5"
                  color="#ffffff93"
                />
              </span>
              <span className="lev">
                <BiCalendarCheck size={50} color="#fff" />
              </span>
              <div className="side flex flex-col gap-5">
                <span className="text-[32px] font-[900]">140,000+</span>
                <span className="w-3/4">
                  Total moves booked through Find a Mover.
                </span>
              </div>
            </div>
          </div>

          <div className="relativ bottom-0 bord border-black flex flex-col justify-cen py-16 gap-2 mt- h-[300px] px-5 abolute bg-[white">
            <div className="flex gap- flex-col">
              <span>
                <BiCalendarCheck
                  size={170}
                  className="absolute top-5 right-5"
                  color="#fe5a5048"
                />
              </span>
              <span>
                <BiCalendarCheck size={50} color="#fe5a50" />
              </span>
              <div className="side flex flex-col gap-5">
                <span className="text-[32px] font-[900]">140,000+</span>
                <span className="w-3/4 side flex flex-col gap-5">
                  Total moves booked through Find a Mover.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="naag rounded-lg overflow-hidden flex flex-col justifyenter ems-center h-[300px] relative border-black b">
          <div className="absolute left-0 -transla2 translate-x-[0%] -translate-y-1/2 top-[50%] w-full in bg-[#2b3457] flex justify-enft-1/2 px-5 h-[300px] flex-col py-16">
            <div className="flex gap- flex-col abslute">
              <span>
                <BsTruck
                  size={170}
                  className="absolute top-5 right-5"
                  color="#ffffff93"
                />
              </span>
              <span className="lev">
                <BsTruck size={50} color="#fff" />
              </span>
              <div className="side flex flex-col gap-5 text-white">
                <span className="text-[32px] font-[900]">300+</span>
                <span className="w-3/4">
                  Removalists Australia wide currently active in our network
                </span>
              </div>
            </div>
          </div>

          <div className="relativ bottom-0 bord border-black flex flex-col justify-cen py-16 gap-2 mt- h-[300px] px-5 abolute  text-black">
            <div className="flex gap- flex-col">
              <span>
                <BsTruck
                  size={170}
                  className="absolute top-5 right-5"
                  color="#fe5a5048"
                />
              </span>
              <span>
                <BsTruck size={50} color="#fe5a50" />
              </span>
              <div className="side flex flex-col gap-5">
                <span className="text-[32px] font-[900]">300+</span>
                <span className="w-3/4 side flex flex-col gap-5">
                  Removalists Australia wide currently active in our network
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="naag rounded-lg overflow-hidden flex flex-col justifyenter ems-center h-[300px] relative border-black b">
          <div className="absolute left-0 -transla2 translate-x-[0%] -translate-y-1/2 top-[50%] w-full in bg-[#2b3457] flex justify-enft-1/2 px-5 h-[300px] flex-col py-16">
            <div className="flex gap- flex-col abslute">
              <span>
                <CgSmileMouthOpen
                  size={170}
                  className="absolute top-5 right-5"
                  color="#ffffff93"
                />
              </span>
              <span className="lev">
                <CgSmileMouthOpen size={50} color="#fff" />
              </span>
              <div className="side flex flex-col gap-5 text-white">
                <span className="text-[32px] font-[900]">4.62/5</span>
                <span className="w-3/4">
                  Average mover rating on our platform from Google.
                </span>
              </div>
            </div>
          </div>

          <div className="relativ bottom-0 bord border-black flex flex-col justify-cen py-16 gap-2 mt- h-[300px] px-5 abolute">
            <div className="flex gap- flex-col">
              <span>
                <CgSmileMouthOpen
                  size={170}
                  className="absolute top-5 right-5"
                  color="#fe5a5048"
                />
              </span>
              <span>
                <CgSmileMouthOpen size={50} color="#fe5a50" />
              </span>
              <div className="side flex flex-col gap-5 text-black">
                <span className="text-[32px] font-[900]">4.62/5</span>
                <span className="w-3/4 side flex flex-col gap-5">
                  Average mover rating on our platform from Google.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="naag rounded-lg overflow-hidden flex flex-col justifyenter ems-center h-[300px] relative border-black b">
          <div className="absolute left-0 -transla2 translate-x-[0%] -translate-y-1/2 top-[50%] w-full in bg-[#2b3457] flex justify-enft-1/2 px-5 h-[300px] flex-col py-16">
            <div className="flex gap- flex-col abslute">
              <span>
                <SlHourglass
                  size={170}
                  className="absolute top-5 right-5"
                  color="#ffffff93"
                />
              </span>
              <span className="lev">
                <SlHourglass size={50} color="#fff" />
              </span>
              <div className="side flex flex-col gap-5 text-white">
                <span className="text-[32px] font-[900]">9 Years</span>
                <span className="w-3/4">
                  In operation and still the best choice for finding a mover.
                </span>
              </div>
            </div>
          </div>

          <div className="relativ bottom-0 bord border-black flex flex-col justify-cen py-16 gap-2 mt- h-[300px] px-5 abolute ">
            <div className="flex gap- flex-col">
              <span>
                <SlHourglass
                  size={170}
                  className="absolute top-5 right-5"
                  color="#fe5a5048"
                />
              </span>
              <span>
                <SlHourglass size={50} color="#fe5a50" />
              </span>
              <div className="side flex flex-col gap-5 text-black">
                <span className="text-[32px] font-[900]">9 Years</span>
                <span className="w-3/4 side flex flex-col gap-5">
                  In operation and still the best choice for finding a mover.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="naag rounded-lg overflow-hidden flex flex-col justifyenter ems-center h-[300px] relative border-black b">
          <div className="absolute left-0 -transla2 translate-x-[0%] -translate-y-1/2 top-[50%] w-full in bg-[#2b3457] flex justify-enft-1/2 px-5 h-[300px] flex-col py-16">
            <div className="flex gap- flex-col abslute">
              <span>
                <FaTruckLoading
                  size={170}
                  className="absolute top-5 right-5"
                  color="#ffffff93"
                />
              </span>
              <span className="lev">
                <FaTruckLoading size={50} color="#fff" />
              </span>
              <div className="side flex flex-col gap-5 text-white">
                <span className="text-[32px] font-[900]">$2m+</span>
                <span className="w-3/4">
                  Per month in booked moves through the use of our platform.
                </span>
              </div>
            </div>
          </div>

          <div className="relativ bottom-0 bord border-black flex flex-col justify-cen py-16 gap-2 mt- h-[300px] px-5 abolute">
            <div className="flex gap- flex-col">
            <span>
                <FaTruckLoading
                  size={170}
                  className="absolute top-5 right-5"
                  color="#fe5a5048"
                />
              </span>
              <span>
                <FaTruckLoading size={50} color="#fe5a50" />
              </span>
              <div className="side flex flex-col gap-5">
                <span className="text-[32px] font-[900]">$2m+</span>
                <span className="w-3/4 side flex flex-col gap-5">
                  Per month in booked moves through the use of our platform.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="naag rounded-lg overflow-hidden flex flex-col justifyenter ems-center h-[300px] relative border-black b">
          <div className="absolute left-0 -transla2 translate-x-[0%] -translate-y-1/2 top-[50%] w-full in bg-[#2b3457] text-white flex justify-enft-1/2 px-5 h-[300px] flex-col py-16">
            <div className="flex gap- flex-col abslute">
              <span>
                <CiStar
                  size={170}
                  className="absolute top-5 right-5"
                  color="#ffffff93"
                />
              </span>
              <span className="lev">
                <CiStar size={50} color="#fff" />
              </span>
              <div className="side flex flex-col gap-5 text-white">
                <span className="text-[32px] font-[900]">20,000+</span>
                <span className="w-3/4">
                  Mover reviews left by genuine FindaMover customers.
                </span>
              </div>
            </div>
          </div>
          <div className="relativ bottom-0 bord border-black flex flex-col justify-cen py-16 gap-2 mt- h-[300px] px-5 abolute">
            <div className="flex gap- flex-col">
            <span>
                <CiStar
                  size={170}
                  className="absolute top-5 right-5"
                  color="#fe5a5048"
                />
              </span>
              <span>
                <CiStar size={50} color="#fe5a50" />
              </span>
              <div className="side flex flex-col gap-5">
                <span className="text-[32px] font-[900]">20,000+</span>
                <span className="w-3/4 side flex flex-col gap-5">
                  Mover reviews left by genuine Find a Mover customers.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="box p-10 flex gap-5 border border-black heroitem relative heroitem">
      <span>
        <BiCalendarCheck
          size={250}
          className="absolute top-0"
          color="#fe5a50"
        />
      </span>
      <div className="side flex flex-col">
        <span className="text-[32px] font-[900]">4.62/5</span>
        <span>Total moves booked through Find a Mover.</span>
      </div>
    </div> */}
    </div>
  );
};

export default AboutFindaMover;
