import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import React, { useEffect } from "react";
import boxes from "../assets/moveboxes.webp";
import mover from "../assets/removalists.webp";
import google from "../assets/google.png";
import users from "../assets/users.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Hero = () => {
  // const CustomDot = ({ onClick, ...rest }) => {
  //   const {
  //     onMove,
  //     index,
  //     active,
  //     carouselState: { currentSlide, deviceType }
  //   } = rest;
  //   const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
  //   // onMove means if dragging or swiping in progress.
  //   // active is provided by this lib for checking if the item is active or not.
  //   return (
  //     <button
  //       className={active ? "active" : "inactive"}
  //       onClick={() => onClick()}
  //     >
  //       {React.Children.toArray(carouselItems)[index]}
  //     </button>
  //   );
  // };
  // window.onscroll = () => {
  //   const items = document.querySelector(".select-items");

  //   if (!(window.scrollY >= 200)) {
  //     items.style.top = "-20%";
  //     items.style.transform = "translate(0%, -100%)";
  //   } else {
  //     items.style.top = "100%";
  //     items.style.transform = "translate(0%, -0%)";
  //   }
  // };

  // function hide(e) {
  //   const related = e.relatedTarget;
  //   if (!select.contains(related)) {
  //     select.classList.remove("active");
  //     items.classList.remove("show");
  //   }
  // }

  // useEffect(() => {
  //   const select = document.querySelector(".select-selected");
  //   const selecttext = document.querySelector(".select-selected div");
  //   const items = document.querySelector(".select-items");
  //   select.onclick = () => {
  //     select.classList.toggle("active");
  //     items.classList.toggle("show");
  //   };

  //   const opts = document.querySelectorAll(".opt");
  //   opts.forEach((opt) => {
  //     opt.onclick = () => {
  //       selecttext.textContent = opt.textContent;
  //       select.classList.remove("active");
  //       items.classList.remove("show");
  //     };
  //   });
  // });

  return (
    <>
      {/* <div className="justify-between grid grid-cols-5 items-center h-[90vh] px-[100px] bg-[#e8e8ea]">
        <div className="herocontext col-span-3 h-full pt-28">
          <div className="heading text-[70px] leading-[65PX] text-[#2b3457]">
            Find and Compare Top Removalists
          </div>
          <div className="content pt-10 text-[24px] font-bold leading-[28px] text-[#2b3457]c">
            Moving House Starts Here – Compare Quotes from Quality Removalists &
            Transporters, Browse Reviews and Book Online.
          </div>
          <div className="get my-10 flex gap-5">
            <div className="custom-select relative w-[300px] text-[#2b3457]">
              <div className="in select-selected flex justify-between items-center bg-white p-[10px] border-[#fe5a50] border-4 rounded-xl cursor-pointer">
                <div className="">Select Type of Move</div>
                <IoIosArrowDown />
              </div>
              <div className="select-items hidden absolute bg-white border mt-2 w-full z-100 overflow-hidden transition-all duration-200 -translate-y-[100%] -top-[20%]">
                <div className="opt">Select Type of Move</div>
                <div className="opt">opt 1</div>
                <div className="opt">opt 2</div>
                <div className="opt">opt 3</div>
              </div>
            </div>
            <div className="quotes flex items-center pl-4 gap-3 hover:gap-5 bg-[#fe5a50] text-white text-[22px] transition-all duration-200 border-[#fe5a50] w-[220px] rounded-xl border-4 ">
              <span> Get Quotes</span>
              <BiRightArrowAlt size={25} />
            </div>
          </div>
        </div>

        <div className="heroimg h-full col-span-2 relative">
          <div className="absolute bottom-[20%] right-[0%] border bg-white p-5 rounded-xl flex gap-2">
            <img src={google} alt="" />
            <div className="flex flex-col">
              <div className="avg flex text-[#2b3457]">
                <span>4.7/5</span>
                <span className="flex items-center px-2">
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarHalf />
                </span>
                <span className="text-[#fe5a50]">Avg Rating</span>
              </div>
              <div className="rev">
                From <span className="text-[#fe5a50]">500+ </span> Google
                Reviews
              </div>
            </div>
          </div>
          <div className="absolute w-[200px] p-3 h-[180px] border bg-white top-[20%] left-[10%] rounded-xl flex flex-col text-center">
            <div className="plus text-3xl font-bold text-[#fe5a50]">140k+</div>
            <img src={users} className="py-2" alt="" />
            <div className="text">
              Australia's <span className="text-[#fe5a50]">#1</span> place to
              find a mover
            </div>
          </div>
          <img className="h-full" src={mover} alt="" />
        </div>
      </div> */}
      <div className="h-[550px] max-md:h-[85vh] relative">
        <Carousel
          swipeable={true}
          draggable={true}
          // showDots={true}
          // customDot={<CustomDot />}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          customTransition="transform 600ms ease-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          className="h-full relative"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >

          <div className=" h-full px-[150px] max-lg:px-[100px] max-md:px-[20px] bg-center bg-[url('./assets/moveboxes.webp')] bg-cover">
            <div className="bg-[#2b3457] opacity-[0.95] w-full z-20 absolute h-full left-0"></div>

            <div className="herocontext h-full m text-center z-50 flex flex-col justify-center">
              <div className="heading text-[70px] w-full max-lg:text-[48px] max-lg:leading-[42px] leading-[65PX] text-white z-40 relative max-md:text-[32px] max-md:leading-[30px]">
                Find and Compare Top Removalistss
              </div>

              <div className="heading text-[50px] max-lg:text-[28px] max-lg:leading-[24px] pt-10 max-lg:pt-5 leading-[55PX] text-[#fff] relative z-50">
                Removalists Australia wide currently active in our network.
              </div>

              <div className="quotes flex items-center pl-5 mx-auto mt-10 py-3 gap-3 hover:gap-5 bg-[#fe5a50] text-white text-[22px] transition-all duration-200 border-[#fe5a50] w-[220px] rounded-xl border-4  relative z-50">
                <span> Get Quotes</span>
                <BiRightArrowAlt size={25} />
              </div>
            </div>
          </div>

          <div className="justify-between border border-black grid grid-cols-5 items-cent h-[600px] max-md:h-[85vh] px-[120px] bg-[#e8e8ea]  bg-[url('./assets/movechecklist.webp')] relative bg-cover bg-center max-lg:px-[80px] max-md:px-[20px]">
            <div className="bg-[#2b3457] opacity-[.95] w-full z-20 absolute h-full"></div>

            <div className="herocontext col-span-3 h-full flex flex-col justify-center relative z-50 max-lg:col-span-4 max-md:col-span-full">
              <div className="heading text-[70px] leading-[65PX] text-white max-lg:text-[48px] max-lg:leading-[42px] max-md:text-[32px] max-md:leading-[30px]">
                Quick, Easy and Free...
              </div>
              <div className="content pt-10 text-[24px] font-bold leading-[28px] text-white max-lg:pt-5 max-md:text-[18px]">
                Moving House Starts Here – Compare Quotes from Quality
                Removalists & Transporters, Browse Reviews and Book Online.
              </div>

              <div className="quotes flex items-center pl-5 mt-10 max-lg:mt-5 py-3 gap-3 hover:gap-5 bg-[#fe5a50] text-white text-[22px] transition-all duration-200 border-[#fe5a50] w-[220px] rounded-xl border-4 ">
                <span> Get Quotes</span>
                <BiRightArrowAlt size={25} />
              </div>
            </div>
          </div>

          <div className="items-center h-full px-[150px] bg-[#e8e8ea] max-lg:px-[80px] max-md:px-[20px]">
            <img src={mover} className="absolute top-[10%] left-[40%] max-md:hidden max-lg:scale-75" alt="" />
            <div className="herocontext col-span-3 h-full flex flex-col justify-center">
              <div className="heading text-[70px] leading-[65PX] text-black text-right max-lg:text-[48px] max-lg:leading-[42px]  max-md:text-[32px] max-md:leading-[30px]">
                <div className="rev">
                  From <span className="text-[#fe5a50]">500+ </span> Google
                  Reviews
                </div>
              </div>

              <div className="content text-[24px] max-lg:text-[18px] max-lg:leading-[16px] font-bold leading-[28px] text-black pt-5 text-right max-md:text-[14px] max-md:leading-[14px]">
                Wuth an Average Google Reviews Ratung of{" "}
                <span className="text-[#fe5a50]">4.7 out of 5</span>
              </div>

              <div className="heading text-[70px] leading-[65PX] text-black mt-[10%] relative z-50 max-lg:text-[48px] max-lg:leading-[42px]  max-md:text-[32px] max-md:leading-[30px]">
                <div className="rev">
                  <span className="text-[#fe5a50]">140k+ </span> Moves Completed
                </div>
              </div>

              <div className="content  text-[24px] max-lg:text-[18px] max-lg:leading-[16px] font-bold leading-[28px] text-black  pt-5 relative max-md:text-[14px] max-md:leading-[14px] z-50">
                Australia's <span className="text-[#fe5a50]">#1</span> place to
                find a mover
              </div>

              <div className="quotes flex items-center pl-5 mr-auto mt-10 py-3 gap-3 hover:gap-5 bg-[#fe5a50] relative z-50 text-white text-[22px] transition-all duration-200 border-[#fe5a50] w-[220px] rounded-xl border-4 ">
                <span> Get Quotes</span>
                <BiRightArrowAlt size={25} />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
