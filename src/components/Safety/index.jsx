import React from "react";

import { Text } from "components";

const Safety = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700"
          size="txtPlayfairDisplayRomanBold25"
        >
          Safety First: Professionalism at Its Core
        </Text>
        <Text
          className="text-center text-white-A700 text-xl w-full"
          size="txtPlayfairDisplayRomanRegular20"
        >
          While we thrive on the thrill of pushing the limits, safety is
          paramount at BASE Productions. Our experienced crew adheres to the
          highest industry standards, utilizing equipment and rigorous safety
          protocols to ensure that every jump is executed with precision and
          care.
        </Text>
      </div>
    </>
  );
};

Safety.defaultProps = {};

export default Safety;
