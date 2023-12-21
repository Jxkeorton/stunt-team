import React from "react";

const sizeClasses = {
  txtPlayfairDisplayRomanBold25Gray400: "font-bold font-playfairdisplay",
  txtPlayfairDisplayRomanSemiBold23: "font-playfairdisplay font-semibold",
  txtPlayfairDisplayRomanRegular20Black900: "font-normal font-playfairdisplay",
  txtPlayfairDisplayRomanRegular20: "font-normal font-playfairdisplay",
  txtPlayfairDisplayRomanBold25: "font-bold font-playfairdisplay",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
