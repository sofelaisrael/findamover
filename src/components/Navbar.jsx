import { CgClose } from "react-icons/cg";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoCaretDownOutline } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { moveTypes, local, interstate, forMovers } from "../data/navlinks";
import Logo from "../assets/findamover_logo.svg";

const Navbar = () => {
  const [link, setLink] = useState([]);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const tabspan = document.querySelectorAll(".navtab span");
    const tabs = document.querySelectorAll(".navtab");
    const linktab = document.querySelector(".linktab");
    const nav = document.querySelector(".nav");

    function hide(e) {
      const related = e.relatedTarget;
      if (!linktab.contains(related)) {
        // linktab.style.display = "none";
        linktab.style.opacity = 0;
      }
    }

    tabs.forEach((tab) => {
      tab.onmouseover = () => {
        // linktab.style.display = "flex";
        const rect = tab.getBoundingClientRect();
        linktab.style.left = `${rect.x}px`;
        linktab.style.opacity = 1;
        switch (tab.querySelector("span").textContent) {
          case "Move Types":
            setLink(moveTypes);
            break;
          case "Local":
            setLink(local);
            break;
          case "Interstate":
            setLink(interstate);
            break;
          case "For Movers":
            setLink(forMovers);
            break;

          default:
            break;
        }
      };
      tab.onmouseleave = hide;
    });

    linktab.onmouseleave = hide;

    const menu = document.querySelector(".menu");
    const mobile = document.querySelector(".mobile-menu");
    const close = document.querySelector(".close");
    const body = document.body;
    const overlay = document.querySelector(".overlay");

    menu.onclick = () => {
      mobile.classList.remove("-left-[150%]");
      setMenu(true);
      mobile.classList.add("left-[20%]");
      overlay.classList.remove("hidden");
      body.classList.add("overflow-hidden");
    };

    close.onclick = () => {
      setMenu(false);
      mobile.classList.remove("left-[20%]");
      mobile.classList.add("left-[150%]");
      overlay.classList.add("hidden");
      body.classList.remove("overflow-hidden");
    };

    overlay.onclick = () => close.onclick();

    window.onresize = () => {
      close.onclick();
    };

    const mobilelinks = document.querySelectorAll(".mobile-links");
    // console.log(mobilelinks);

    mobilelinks.forEach((link) => {
      link.onclick = () => {
        const links = link.lastChild; //.querySelector('.links')
        console.log(links);

        links.classList.toggle("h-0");
      };
    });
  });

  return (
    <>
      {" "}
      <nav className="flex nav justify-between relative z-[100000] bg-[#e8e8ea] max-w-[1300px] mx-auto px-10 max-xl:px-5">
        <div className="nav-brand">
          <img className="w-32 h-32 max-lg:size-20" src={Logo} alt="" />
        </div>

        <div className="nav-links flex gap-4 max-xl:gap-1 items-center text-[#2b3457] max-lg:hidden">
          <div className="movetypes nav-items cursor-pointer p-3 text-lg navtab flex items-center">
            <span className="movetypes">Move Types</span>
            <IoCaretDownOutline />
          </div>
          <div className="local nav-items cursor-pointer p-3 text-lg navtab flex items-center">
            <span className="">Local</span>
            <IoCaretDownOutline />
          </div>
          <div className="interstate nav-items cursor-pointer p-3 text-lg navtab flex items-center">
            <span className="">Interstate</span>
            <IoCaretDownOutline />
          </div>
          <div className="blog nav-items cursor-pointer p-3 text-lg">Blog</div>
          <div className="formovers nav-items cursor-pointer p-3 text-lg navtab flex items-center">
            <span className="">For Movers</span>
            <IoCaretDownOutline />
          </div>
          <div className="login py-2 text-black  hover:bg-[#2b3457] hover:text-white rounded-lg nav-items cursor-pointer p-3 text-lg transition-all duration-200">
            Login
          </div>
          <div className="getquotes nav-items cursor-pointer p-3 text-lg border-2 rounded-lg flex border-[#fe5a50] items-center gap-2 text-[#fe5a50] font-bold hover:text-white hover:bg-[#fe5a50] transition-all duration-200">
            Get Quotes <BiRightArrowAlt size={25} />
          </div>
        </div>

        <div className="relative hidden max-lg:flex items-center cursor-pointer">
          <div className={`${!menu ? "block" : "hidden"} menu items-center `}>
            <CgMenuLeftAlt size={40} />
          </div>
          <div className={`close ${!menu ? "hidden" : "block"}`}>
            <CgClose size={40} />
          </div>
        </div>

        <div className="absolute bg-white opacity-0 linktab top-[70%] rounded-lg overflow-hidden pl-5 pr-10 py-7 flex flex-col gap-3 capitalize max-lg:hidden border shadow-lg text-[18px] font-normal transition-all duration-300 -translate-x-[30%]">
          {link.map((l, index) => (
            <div className="l">{l.name}</div>
          ))}
        </div>

        <div className="mobile-menu lg:hidden fixed bg-[#e8e8ea] h-[100vh] transition-all duration-200 w-[80%] top-20 overflow-scroll z-50">
          <div className="mobile-links px-10 py-2 flex flex-col justify-center">
            <span className="flex items-center cursor-pointer text-2xl ">
              Move Types <IoCaretDownOutline />
            </span>
            <div className="links h-0 px-10 cursor-pointer pt-5 overflow-hidden flex flex-col gap-5">
              {moveTypes.map((type) => (
                <div className="type hover:underline">{type.name}</div>
              ))}
            </div>
          </div>
          <div className="mobile-links px-10 py-2 flex flex-col justify-center">
            <span className="flex items-center cursor-pointer text-2xl ">
              Local <IoCaretDownOutline />
            </span>
            <div className="links h-0 px-10 cursor-pointer pt-5 overflow-hidden flex flex-col gap-5">
              {local.map((type) => (
                <div className="type hover:underline">{type.name}</div>
              ))}
            </div>
          </div>
          <div className="mobile-links px-10 py-2 flex flex-col justify-center">
            <span className="flex items-center cursor-pointer text-2xl ">
              Interstate <IoCaretDownOutline />
            </span>
            <div className="links h-0 px-10 cursor-pointer pt-5 overflow-hidden flex flex-col gap-5">
              {interstate.map((type) => (
                <div className="type hover:underline">{type.name}</div>
              ))}
            </div>
          </div>

          <div className="mobile-links px-10 py-2 pb-5">
            <span className="flex items-center cursor-pointer text-2xl ">
              Blog
            </span>
          </div>

          <div className="mobile-links px-10 py-2 flex flex-col justify-center">
            <span className="flex items-center cursor-pointer text-2xl ">
              For Movers <IoCaretDownOutline />
            </span>
            <div className="links h-0 px-10 cursor-pointer pt-5 overflow-hidden flex flex-col gap-5">
              {forMovers.map((type) => (
                <div className="type hover:underline">{type.name}</div>
              ))}
            </div>
          </div>
          <div className="mx-10 my-5 login py-2 text-black  hover:bg-[#2b3457] hover:text-white rounded-lg nav-items cursor-pointer p-3 text-lg transition-all duration-200">
            Login
          </div>
          <div className="mx-10 my-2 getquotes nav-items cursor-pointer p-3 text-lg border-2 rounded-lg flex border-[#fe5a50] items-center gap-2 text-[#fe5a50] font-bold hover:text-white hover:bg-[#fe5a50] transition-all duration-200">
            Get Quotes <BiRightArrowAlt size={25} />
          </div>
          <div className="mobile-links px-4 py-2 text-sm"></div>
        </div>
      </nav>
      <div className="overlay fixed inset-0 bg-black bg-opacity-50 hidden z-40"></div>
    </>
  );
};

export default Navbar;
