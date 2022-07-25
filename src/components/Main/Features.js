import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="px-[7rem] py-[7rem] w-full h-auto what-we-do__header">
      <div className="flex justify-center items-center my-0 mx-auto ">
        <div className="w-[250px] h-[5px] bg-orange rounded-full"></div>
        <h1 className="text-[35px] ml-[1.5rem] mr-[1.5rem]">Features</h1>
        <div className="w-[250px] h-[5px] bg-orange rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 gap-[30px] w-full mt-[4rem]">
        <div className="flex justify-between items-center h-auto w-full">
          <div
            className="h-auto w-full"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-[30px]">Multiple Choice Questions</h1>
            <p className="text-[18px] mt-[0.5rem] text-[#373737]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>
          <img
            src="/images/concept-of-importance-of-work-place-for-employees-in-business.png"
            alt=""
            className="h-[350px] w-[500px] ml-[3rem]"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          />
        </div>
        <div className="flex justify-between items-center h-auto w-full">
          <img
            src="/images/concept-of-business-lady-doing-research-and-development-of-product.png"
            alt=""
            className="h-[350px] w-[500px] mr-[3rem]"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          />
          <div
            className="h-auto w-full"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h1 className="text-[30px]">Search For Questions</h1>
            <p className="text-[18px] mt-[0.5rem] text-[#373737]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center h-auto w-full">
          <div
            className="h-auto w-full"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-[30px]">Save Questions</h1>
            <p className="text-[18px] mt-[0.5rem] text-[#373737]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>
          <img
            src="/images/business-lady-do-multi-tasking.png"
            alt=""
            className="h-[350px] w-[500px] ml-[3rem]"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  );
}
