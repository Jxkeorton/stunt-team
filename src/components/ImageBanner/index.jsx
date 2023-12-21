import React from "react";

import { Img } from "components";

const ImageBanner = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-[5px] sm:grid sm:grid-cols-3 items-center justify-evenly w-full">
          <Img
            className="h-[250px] md:h-auto object-cover w-[17%] sm:w-[100%]"
            src="images/img_balloonswing.png"
            alt="balloonswing"
          />
          <Img
            className="h-[250px] md:h-auto object-cover w-[17%] sm:w-[100%]"
            src="images/img_skibase.png"
            alt="skibase"
          />
          <Img
            className="h-[250px] md:h-auto object-cover w-[17%] sm:w-[100%]"
            src="images/img_motobase_250x240.png"
            alt="motobase_One"
          />
          <Img
            className="h-[250px] md:h-auto object-cover w-[17%] sm:w-[100%]"
            src="images/img_topofballoon.png"
            alt="topofballoon"
          />
          <Img
            className="h-[250px] md:h-auto object-cover w-[17%] sm:w-[100%]"
            src="images/img_overedge.png"
            alt="overedge"
          />
          <Img
            className="h-[250px] md:h-auto object-cover w-[17%] sm:w-[100%]"
            src="images/img_cyclebase.png"
            alt="cyclebase"
          />
        </div>
      </div>
    </>
  );
};

ImageBanner.defaultProps = {};

export default ImageBanner;
