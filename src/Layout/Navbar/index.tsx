import { ListItem } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavItem, Span } from "../../tw-types";
// import QrCode2Icon from '@mui/icons-material/QrCode2';
import QrCodeIcon from "@mui/icons-material/QrCode";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row min-h-screen bg-gray-100">
        <div className="flex flex-col pr-5 overflow-hidden bg-white-800">
          <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="mt-4 text-center text-indigo-500 uppercase text-1xl">
              Free Online Tools
            </h1>
          </div>
          <ul className="flex flex-col pt-4">
            <li className="flex  justify-self-auto border border-black m just flex-border-4 ">
              <QrCodeIcon  />
              <Link to="/QRCodes">
                <NavItem>QR Code Generator</NavItem>
              </Link>
            </li>
            <li className="flex  justify-self-auto border border-black m just flex-border-4 ">
              <QrCodeIcon  />
              <Link to="/BusinessNameGenerator">
                <NavItem>Business Name Generator</NavItem>
              </Link>
            </li>
            <li className="flex  justify-self-auto border border-black m just flex-border-4 ">
              <QrCodeIcon  />
              <Link to="/QRCodes">
                <NavItem>QR Code Generator</NavItem>
              </Link>
            </li>
             <li className="flex  justify-self-auto border border-black m just flex-border-4 ">
              <QrCodeIcon  />
              <Link to="/QRCodes">
                <NavItem>QR Code Generator</NavItem>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
