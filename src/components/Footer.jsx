import React from "react";
import Logo from "../assets/findamover_logo.svg";

const Footer = () => {
  return (
    <div className="footer grid grid-cols-6 p-20 gap-10 max-xl:grid-cols-3 max-md:px-10 max-md:grid-cols-2">
      <div className="col-span-1 flex flex-col gap-3">
        <div className="logo w-36">
          <img src={Logo} alt="" />
        </div>
        <span>Home</span>
        <span>Blog</span>
        <span>Contact Us</span>
        <span>Privacy Policy</span>
        <span>Business Index</span>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <div className="head font-['quicksand'] text-[26px]">Providers</div>
        <span>FAQ</span>
        <span>Join Our Network</span>
        <span>Login</span>
        <span>Terms of Use</span>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <div className="head font-['quicksand'] text-[26px]">Customer</div>
        <span>How it works</span>
        <span>FAQ</span>
        <span>Get Quotes</span>
        <span>Login</span>
        <span>Terms of Use</span>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <div className="head font-['quicksand'] text-[26px]">Move Types</div>
        <span>Local removalists</span>
        <span>Interstate removalists</span>
        <span>Office removalists</span>
        <span>Piano removalists</span>
        <span>Pool table removalists</span>
        <span>Furniture removalists</span>
        <span>Fragile Item removalists</span>
        <span>Marketplace Deliveries</span>
        <span>Rubbish Removals</span>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <div className="head font-['quicksand'] text-[26px]">Major Cities</div>
        <span>Sydney, NSW</span>
        <span>Melbourne, VIC</span>
        <span>Brisbane, QLD</span>
        <span>Perth, WA</span>
        <span>Adelaide, SA</span>
        <span>Canberra, ACT</span>
        <span>Darwin, NT</span>
        <span>Hobart, TAS</span>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <div className="head font-['quicksand'] text-[26px]">Other Cities</div>
        <span>Newcastle</span>
        <span>Gold Coast</span>
        <span>Wollongong</span>
        <span>Sunshine Coast</span>
        <span>Geelong</span>
        <span>Townsville</span>
        <span>Cairns</span>
        <span>Toowoomba</span>
        <span>Bendigo</span>
      </div>
    </div>
  );
};

export default Footer;
