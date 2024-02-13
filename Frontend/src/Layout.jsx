import React from "react";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-white-A700 flex flex-col font-playfairdisplay items-center justify-start mx-auto py-[39px] w-full">
      <NavBar className="slide-in-top flex flex-col items-center justify-center md:px-5 w-full"/>
        {children}
      <Footer className="flex flex-col gap-[18px] items-center justify-start mb-2.5 mt-[51px] md:px-5 w-2/5 md:w-full" />
    </div>
  );
};

export default Layout;