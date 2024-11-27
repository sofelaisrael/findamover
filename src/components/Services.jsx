import React from "react";

const Services = () => {
  return (
    <div className="services grid grid-cols-4 gap-20 p-20 40">
      <div className="col-span-2 h-[400px] bg-[url('./assets/long.jpg')] bg-cover bg-center rounded-xl group relative transition-all duration-500 bod">
        <div className="absolute w-[80%] innerbod z-[100000] h-[80px] overflow-hidden rounded-2xl bg-white -traslate-y-1/2 -translate-x-1/2 top-[calc(100%-50px)] left-[50%] group-hover:h-[250px] transition-all duration-200">
          <div className="text-[32px] text-center font-['quicksand'] py-5 titleshow">
            Home Removals
          </div>
          <div className="cont px-10 text-[12px]">
            We’ve been in the moving space since 2014. That’s almost a decade of
            moving! Whether you need house removals locally or interstate, let
            us start you off on the right foot. Our expert house removalists can
            help you with every aspect of your home removal from packing and
            furniture disassembly through to moving your belongings to your new
            home or office, allowing you to focus on settling in sooner.
          </div>
        </div>
      </div>

      <div className="col-span-2 h-[400px] bg-[url('./assets/supplies.jpg')] bg-cover bg-center rounded-xl group relative transition-all duration-500 bod">
        <div className="absolute w-[80%] innerbod z-[100000] h-[80px] overflow-hidden rounded-2xl bg-white -traslate-y-1/2 -translate-x-1/2 top-[calc(100%-50px)] left-[50%] group-hover:h-[300px] transition-all duration-200">
          <div className="text-[32px] text-center font-['quicksand'] py-5 titleshow">
            Furniture Removals
          </div>
          <div className="cont px-10 text-[12px]">
            We understand your furniture is some of the most valuable assets
            you'll be moving into your new home or office. That's why it's
            important to find furniture removalists that specialise in furniture
            removals and are experienced in handling valuable furniture and
            fragile items this includes using highly specialised equipment when
            moving pianos and disassembling pool tables. This is why our
            furniture removalists can also offer furniture disassembly and
            reassembly services to make moving furniture more convenient to you.
          </div>
        </div>
      </div>


      <div className="col-span-2 h-[400px] bg-[url('./assets/store.jpg')] bg-cover bg-center rounded-xl group relative transition-all duration-500 bod">
        <div className="absolute w-[80%] innerbod z-[100000] h-[80px] overflow-hidden rounded-2xl bg-white -traslate-y-1/2 -translate-x-1/2 top-[calc(100%-50px)] left-[50%] group-hover:h-[220px] transition-all duration-200">
          <div className="text-[32px] text-center font-['quicksand'] py-5 titleshow">
            Mini Moves
          </div>
          <div className="cont px-10 text-[12px]">
            If you only have a small removal, booking small removalists may be
            more suitable for your mini move. Mini movers can often tailor your
            relocation needs offer services with packing, unpacking,
            disassembling and reassembling furniture. When finding small
            removalists to handle your mini moves, look no further than Find a
            Mover.
          </div>
        </div>
      </div>


      <div className="col-span-2 h-[400px] bg-[url('./assets/packing.jpg')] bg-cover bg-center rounded-xl group relative transition-all duration-500 bod">
        <div className="absolute w-[80%] innerbod z-[100000] h-[80px] overflow-hidden rounded-2xl bg-white -traslate-y-1/2 -translate-x-1/2 top-[calc(100%-50px)] left-[50%] group-hover:h-[200px] transition-all duration-200">
          <div className="text-[32px] text-center font-['quicksand'] py-5 titleshow">
            Interstate Removals
          </div>
          <div className="cont px-10 text-[12px]">
            Find a Mover’s network extends right across Australia to every major
            capital city so you can count on us for all your interstate moves,
            whether it’s Sydney removalists, removalists in Melbourne, movers in
            Brisbane, Perth removalists or any other city. We’ve got interstate
            removalists to help get you there.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
