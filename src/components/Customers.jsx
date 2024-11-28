import React from "react";
import customer from "../assets/image_see.png";

const Customers = () => {
  return (
    <div className="container bg-blue-400 flex flex-col items-center py-8 rounded-lg mb-10 mt-[50px]">
   
      <div className="text-center text-[45px] text-white font-bold mb-8">
        <h2>What our customers are saying</h2>
      </div>

      {/* Rasm va Matn */}
      <div className="flex flex-row  items-center gap-8 p-6 rounded-lg shadow-lg">
        {/* Rasm qismi */}
        <div className="flex gap-8 items-center">
          <img
            src={customer}
            alt="customer"
            className="w-[113px] h-[87px] rounded-full border-2 border-gray-300"
          />
          <p className="mt-4 text-lg font-semibold text-white">
            AK <span className="block text-sm text-[FFFFF]">Abc ltd</span>
          </p>
        </div>

      
        <div className="text-white text-start ml-[80px] w-[400px] h-[130px] ">
          <p className="text-lg">
            “Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
