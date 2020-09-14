import React from 'react';
import { Link } from 'react-router-dom';
import { BsBell, BsSearch } from 'react-icons/bs';
import { FaSearch, FaRegBell } from 'react-icons/fa';
interface NavLinkItemProps {
  link: string;
}
export const HorizonntalNavbar: React.FC = (): JSX.Element => {
  return (
    <nav className="horizontal-navbar d-flex align-items-center justify-content-between padding-vertical-xs padding-horizontal-md bg-gray-medium">
      <div className="d-flex align-items-center">
        <NavLinkItem link="/profile">Buy</NavLinkItem>
        <NavLinkItem link="/profile">Sell/Trade</NavLinkItem>
        <NavLinkItem link="/profile">Finance</NavLinkItem>
        <NavLinkItem link="/profile">About Us</NavLinkItem>
        <NavLinkItem link="/profile">How it Works</NavLinkItem>
        <NavLinkItem link="/profile">Careers</NavLinkItem>
        <NavLinkItem link="/profile">Contact Us</NavLinkItem>
      </div>
      <div className="d-flex align-items-center">
        <div className="padding-sm cursor-pointer">
          <FaSearch className="color-gray-dark" />
        </div>
        <div className="padding-sm cursor-pointer">
          <div className="position-relative">
            <FaRegBell className="color-gray-dark" />
            <div className="notification-indicator" />
          </div>
        </div>
        <div className="padding-sm cursor-pointer">
          <img
            src="https://res.cloudinary.com/dx5lp5drd/image/upload/v1574682959/businessman-310819_640_guvqva.png"
            alt="user avatar"
            className="avatar-sm"
          />
        </div>
      </div>
    </nav>
  );
};

const NavLinkItem: React.FC<NavLinkItemProps> = ({
  link,
  children,
}): JSX.Element => {
  return (
    <Link to={link} className="font-weight-500 font-xs color-dark padding-sm">
      {children}
    </Link>
  );
};
