import React from "react";

import { Img, Text } from "components";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="md:flex md:flex-col md:h-1/2 h-[786px] sm:h-auto md:items-center md:justify-center object-cover md:w-1/2 w-[47%] sm:w-full"
          src="images/img_motobase.png"
          alt="motobase"
        />
        <div className="flex flex-col md:items-center items-start justify-start md:justify-start md:mt-0 mt-[331px] w-[48%] md:w-full">
          <Text
            className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
            size="txtPlayfairDisplayRomanSemiBold23"
          >
            Welcome to BASE Productions
          </Text>
          <Text
            className="mt-11 md:text-center text-white-A700 text-xl md:w-4/5 w-full"
            size="txtPlayfairDisplayRomanRegular20"
          >
            We redefine the boundaries of cinematic excitement by bringing the
            breathtaking world of BASE jumping to the big screen.{" "}
          </Text>
          <Text
            className="mt-[47px] text-white-A700 text-xl"
            size="txtPlayfairDisplayRomanRegular20"
          >
            Available for assignments Worldwide.
          </Text>
          
            <Link 
              to="/contact"
              className="md:cursor-pointer md:flex md:flex-col md:h-[109px] h-[66px] md:items-center md:justify-center mt-[42px] relative w-2/5"
            >
              <button className="bg-white-A700 md:flex h-[67px] md:items-center md:justify-center m-auto rounded-[15px] w-full" >
                <Text
                  className="absolute md:flex h-max inset-[0] md:items-center justify-center m-auto text-black-900 text-center text-xl w-max"
                  size="txtPlayfairDisplayRomanRegular20Black900"
                >
                  Get In Touch !
                </Text>
              </button>
            </Link>
        </div>
      </div>
    </>
  );
};

Welcome.defaultProps = {};

export default Welcome;
