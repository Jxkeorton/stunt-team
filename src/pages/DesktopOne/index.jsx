import React from "react";

import Footer from "components/Footer";
import ImageBanner from "components/ImageBanner";
import NavBar from "components/NavBar";
import Safety from "components/Safety";
import Team from "components/Team";
import Welcome from "components/Welcome";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-playfairdisplay items-center justify-start mx-auto py-[39px] w-full">
        <NavBar className="slide-in-top flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="bg-black-900 flex flex-col items-center justify-end mt-[63px] py-[18px] w-full">
          <Welcome className="flex md:flex-col flex-row md:gap-10 gap-[72px] md:items-center items-start justify-start max-w-[1161px] mt-[7px] mx-auto md:px-5 w-full" />
          <ImageBanner className="flex flex-col items-center justify-start mt-[26px] w-full" />
          <Safety className="flex flex-col gap-[22px] items-center justify-start max-w-[884px] mt-[74px] mx-auto pt-0.5 md:px-5 w-full" />
          <Team className="flex md:flex-col-reverse flex-row md:gap-10 md:items-center items-start justify-between md:justify-center max-w-[1148px] mt-[74px] mx-auto md:px-5 w-full" />
        </div>
        <Footer className="flex flex-col gap-[18px] items-center justify-start mb-2.5 mt-[51px] md:px-5 w-2/5 md:w-full" />
      </div>
    </>
  );
};

export default DesktopOnePage;
