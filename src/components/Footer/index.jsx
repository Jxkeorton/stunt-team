import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row  md:h-[30px] items-center justify-center md:w-1/4 w-[42%] sm:w-auto">
          <Img
            className="h-auto object-cover w-[25px] social-icon"
            src="images/img_instagram1.png"
            alt="instagramOne_One"
          />
          <Img
            className="h-auto ml-[34px] object-cover w-[25px] social-icon"
            src="images/img_twitter1.png"
            alt="twitterOne_One"
          />
          <Img
            className="h-auto md:h-full ml-[34px] object-cover w-[7%] md:w-[25px] social-icon"
            src="images/img_facebook1.png"
            alt="facebookOne_One"
          />
          <Img
            className="h-auto ml-[34px] object-cover w-[15%] social-icon"
            src="images/img_share1.png"
            alt="shareOne_One"
          />
        </div>
        <Text
          className="md:text-[23px] text-[25px] sm:text-base text-center text-gray-400"
          size="txtPlayfairDisplayRomanBold25Gray400"
        >
          BASE Productions - All Rights Reserved
        </Text>
      </div>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
