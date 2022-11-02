import React from "react";
import { ReactComponent as ZuriLogo } from "../svgs/zuri-logo.svg";
import { ReactComponent as Logo } from "../svgs/i4g.svg";
import IngLogo from "../svgs/i4g.svg";

const Footer = () => {
  return (
    <>
      <div className="px-16 hidden md:block">
        <div className="h-12" />
        <div className="border border-solid" />
        <div className="flex gap-16 p-12 justify-between">
          <ZuriLogo />
          <p className="w-[832.28px] text-[#667085] font-normal text-base text-center">
            HNG Internship 9 Frontend Task
          </p>
          <Logo />
        </div>
      </div>

      <div className="md:hidden block">
        <div className="h-12" />
        <div className="border border-solid" />
        <ul className="flex flex-col pt-12 gap-4">
          <li>
            <ZuriLogo />
          </li>
          <li> HNG Internship 9 Frontend Task</li>
          <li>
            <img src={IngLogo} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
