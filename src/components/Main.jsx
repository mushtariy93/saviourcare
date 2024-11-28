import React from 'react'
import { DATA } from '../static';

const Main = () => {

  return (
    <div className="flex flex-col container ">
      {DATA.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center`}
        >
          {/* Rasm qismi */}
          <div className="w-full md:w-1/2">
            <img src={item.img} alt={item.title} className="w-full h-auto" />
          </div>

          {/* Matn qismi */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-xl font-bold mb-4 text-[#462E6A]">
              {item.title}
            </h2>
            <div class="w-16 h-1 bg-blue-500 mb-4"></div>
            <p className="text-gray-600 mb-4 text-[18px]" >{item.text}</p>
            {/* Tugma */}
            <button className="font-medium text-[18px] leading-[60px] text-[#458FF6] px-[50px] rounded-[50px] border-solid border-[1px] border-[#458FF6] hover:bg-[#458FF6] hover:text-white duration-300 block mx-auto ">
              {item.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main
