import React, {useState} from "react";

import { Img, Text } from "components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col gap-[33px] items-center justify-center p-2.5 w-full">
          <div className="flex md:flex-row-reverse flex-row md:gap-5 items-center md:justify-between justify-start  w-full">
            <div className="flex md:flex-1 flex-row md:hidden items-center justify-between w-[15%] md:w-full">
              <Img
                className="h-[25px] md:h-auto object-cover w-[25px]"
                src="images/img_instagram1.png"
                alt="instagramOne"
              />
              <Img
                className="h-[25px] md:h-auto object-cover w-[25px]"
                src="images/img_twitter1.png"
                alt="twitterOne"
              />
              <Img
                className="h-[25px] md:h-auto object-cover"
                src="images/img_facebook1.png"
                alt="facebookOne"
              />
              <Img
                className="h-[25px] md:h-auto object-cover"
                src="images/img_share1.png"
                alt="shareOne"
              />
            </div>
            <div onClick={toggleMenu} className="cursor-pointer lg:hidden">
              <FontAwesomeIcon
                icon={faBars}
                className="md:h-auto object-cover w-[25px]"
              />
            </div>
            <Img
              className="md:block md:flex-col h-auto md:h-auto md:items-center md:justify-center md:ml-[0] ml-[276px] object-cover md:text-center md:w-1/2 w-[31%]"
              src="images/img_logo.png"
              alt="logo"
            />
            <Img
              className="cursor-pointer h-[25px] md:h-auto md:ml-[0] ml-[414px] object-cover md:w-5 w-[25px]"
              src="images/img_profile.png"
              alt="profile"
            />
          </div>
          <ul className="flex md:flex-col flex-row md:hidden items-start justify-center w-1/2 md:w-full common-row-list">
            <li>
              <a href="/" className="text-black-900 text-xl nav-link">
                <Text size="txtPlayfairDisplayRomanRegular20Black900" >
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="ml-[75px] text-black-900 text-xl nav-link"
              >
                <Text size="txtPlayfairDisplayRomanRegular20Black900">
                  About
                </Text>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="ml-[76px] text-black-900 text-xl nav-link"
              >
                <Text size="txtPlayfairDisplayRomanRegular20Black900">
                  Services
                </Text>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="ml-[76px] text-black-900 text-xl nav-link"
              >
                <Text size="txtPlayfairDisplayRomanRegular20Black900">
                  Contact
                </Text>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="ml-[76px] text-black-900 text-xl nav-link"
              >
                <Text size="txtPlayfairDisplayRomanRegular20Black900">
                  The Team
                </Text>
              </a>
            </li>
          </ul>
        </div>

        {/* Responsive Navigation Menu */}
        {isMenuOpen && (
          <ul className="flex flex-col gap-4 mt-3 items-center justify-center w-full lg:hidden">
            <li>
              <a href="/" className="text-black-900 text-xl nav-link ">
                <Text size="txtPlayfairDisplayRomanRegular20Black900" className="tracking-in-expand">
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" text-black-900 text-xl nav-link"
              >
                <Text size="txtPlayfairDisplayRomanRegular20Black900" className="tracking-in-expand">
                  About
                </Text>
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" text-black-900 text-xl nav-link"
              >
                <Text size="txtPlayfairDisplayRomanRegular20Black900" className="tracking-in-expand">
                  Services
                </Text>
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" text-black-900 text-xl nav-link"
              >
                <Text size="txtPlayfairDisplayRomanRegular20Black900" className="tracking-in-expand">
                  Contact
                </Text>
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" text-black-900 text-xl nav-link"
              >
                <Text size="txtPlayfairDisplayRomanRegular20Black900" className="tracking-in-expand">
                  The Team
                </Text>
              </a>
            </li>
          </ul>
        )}
      </header>
    </>
  );
};

NavBar.defaultProps = {};

export default NavBar;
