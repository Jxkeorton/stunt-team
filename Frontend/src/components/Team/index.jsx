import React from "react";

import { Link } from "react-router-dom";
import { Img, Text } from "components";

const Team = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:items-center items-start justify-start md:mt-0 mt-[49px]">
          <Text
            className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
            size="txtPlayfairDisplayRomanBold25"
          >
            The Team
          </Text>
          <Text
            className="mt-[42px] md:text-left text-white-A700 text-xl w-[96%] sm:w-full"
            size="txtPlayfairDisplayRomanRegular20"
          >
            BASE Productions is comprised of a diverse, united by a shared love
            for pushing boundaries. From experienced BASE jumpers to seasoned
            film professionals, our team brings a unique blend of skills and
            expertise to every project. Get to know the faces behind the jumps,
            the daredevils who make the impossible look effortless.
          </Text>

          <Link to="/the-team" className="md:cursor-pointer md:flex h-[66px] md:h-[89px] mt-[22px] relative w-[45%]">
            <button className="bg-white-A700 md:flex h-[67px] m-auto rounded-[15px] w-full transition-all duration-300 ease-in-out hover:bg-yellow-500">
            <Text
              className="absolute h-max inset-[0] justify-center m-auto text-black-900 text-center text-xl w-max"
              size="txtPlayfairDisplayRomanRegular20Black900"
            >
              Meet The Team
            </Text>
            </button>
          </Link>

        </div>
        <Img
          className="h-[538px] md:h-auto object-cover w-[538px] sm:w-full"
          src="images/img_aiteam1.png"
          alt="aiteamOne"
        />
      </div>
    </>
  );
};

Team.defaultProps = {};

export default Team;
