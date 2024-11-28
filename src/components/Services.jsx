import React from "react";
import { SERVICES_LINKS } from "../static";

const Services = () => {
  const service_link = SERVICES_LINKS.map((link) => (
    <div
      className="py-[58px] px-[36px] w-[350px] h-[354px] flex flex-col justify-center items-center gap-6 bg-neutral-50 rounded-[10px] text-left hover:bg-[#cfdeed] duration-[.3s] hover:scale-[1.03]"
      key={link.id}
    >
      <div>
        <img src={link.image} alt="Service" className="" />
      </div>
      <h2 className="font-bold text-center text-xl leading-5 text-black">{link.title}</h2>
      <p className="font-sans">{link.text}</p>
    </div>
  ));
  return (
    <div className="max-w-[1280px] mx-auto  mb-[100px]">
      <div>
        <div class="relative text-center ">
          <h2 class="text-[45px] text-[#462E6A] font-bold inline-block mb-4">
            Services we Offer
          </h2>
          <div class="mx-auto w-16 h-1 bg-blue-500"></div>
        </div>

        <p className="my-12 font-medium leading-7 text-center text-[20px] text-[#CCD2E9] w-[85%] mx-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {service_link}
      </div>
      <div className=" my-[50px] w-[100%]">
        <button className="font-medium text-[18px] leading-[60px] text-[#458FF6] px-[50px] rounded-[50px] border-solid border-[1px] border-[#458FF6] hover:bg-[#458FF6] hover:text-white duration-300 block mx-auto">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Services;
