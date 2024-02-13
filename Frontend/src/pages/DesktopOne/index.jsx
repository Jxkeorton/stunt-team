import React from "react";

import ImageBanner from "components/ImageBanner";
import Safety from "components/Safety";
import Team from "components/Team";
import Welcome from "components/Welcome";

import Layout from "Layout";

const DesktopOnePage = () => {
  return (
    <>
      <Layout className="z-1">
        <div className="bg-black-900 flex flex-col items-center justify-end mt-[63px] py-[18px] w-full">
          <Welcome className="flex md:flex-col flex-row md:gap-10 gap-[72px] md:items-center items-start justify-start max-w-[1161px] mt-[7px] mx-auto md:px-5 w-full" />
          <ImageBanner className="flex flex-col items-center justify-start mt-[26px] w-full" />
          <Safety className="flex flex-col gap-[22px] items-center justify-start max-w-[884px] mt-[74px] mx-auto pt-0.5 md:px-5 w-full" />
          <Team className="flex md:flex-col-reverse flex-row md:gap-10 md:items-center items-start justify-between md:justify-center max-w-[1148px] mt-[74px] mx-auto md:px-5 w-full" />
        </div>
      </Layout>
    </>
  );
};

export default DesktopOnePage;
