import React from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Curosel = ({ bannerData, setBannerIndex }) => {

	
console.log("curosel",bannerData?.id)
	const handleIndex = (event) => {
		if (event) {
			setBannerIndex(bannerData.id+1)
		}
		else {
			console.log("click", bannerData.id)
			if (bannerData.id !== 0) {
				setBannerIndex(bannerData.id - 1);
			}
			else {
				setBannerIndex(3);
			}	
		}
	}

  return (
    <div
      className="w-full h-64 relative md:h-96 lg:h-screen bg-center object-cover bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bannerData?.img})`,
      }}
    >
      <div>Hello world</div>
      <div className="flex justify-between px-4 absolute w-full top-1/2 bottom-1/2">
        <div
          onClick={() => handleIndex(true)}
          className=" border-2 w-10 h-10 flex justify-center items-center  border-gray-800 rounded-full"
        >
          <FiArrowLeft className="text-3xl text-gray-800 cursor-pointer" />
        </div>
        <div
          onClick={() => handleIndex(false)}
          className=" border-2 w-10 h-10 flex justify-center items-center  border-gray-800 rounded-full"
        >
          <FiArrowRight className="text-3xl text-gray-800 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Curosel;