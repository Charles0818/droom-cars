import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCheck, FaHeart, FaCar } from 'react-icons/fa';
import { RiSteering2Fill, RiHeartsFill } from 'react-icons/ri';
import { AiFillCar } from 'react-icons/ai';
interface ListItemProps {
  title: string;
  subtitle: string;
  link: string;
  iconBackgroundColor: string;
}
export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <aside className="sidebar padding-horizontal-md padding-vertical-md bg-primary-dark">
      <ProfileSummary />
      <ListItem
        title="my profile"
        link="/profile"
        subtitle="hello how are you?"
        iconBackgroundColor="rgb(38, 240, 156)">
        <FaUserCheck size={15} className="color-white" />
      </ListItem>
      <ListItem
        title="my favourites"
        link="/profile"
        subtitle="Favourites"
        iconBackgroundColor="rgb(218, 26, 51)">
        <FaHeart size={15} className="color-white" />
      </ListItem>
      <ListItem
        title="offered cars"
        link="/profile"
        subtitle="Offered"
        iconBackgroundColor="rgb(3, 165, 194)">
        <FaCar size={15} className="color-white" />
      </ListItem>
      <ListItem
        title="test ride"
        link="/profile"
        subtitle="Test Rides"
        iconBackgroundColor="rgb(241, 150, 46)">
        <RiSteering2Fill size={15} className="color-white" />
      </ListItem>
      <ListItem
        title="Buying Cars"
        link="/"
        subtitle="Your Cars"
        iconBackgroundColor="rgb(240, 38, 132)">
        <AiFillCar size={15} className="color-white" />
      </ListItem>
      <ListItem
        title="Send Feedback"
        link="/profile"
        subtitle="Excellent"
        iconBackgroundColor="rgb(134, 241, 46)">
        <RiHeartsFill size={15} className="color-white" />
      </ListItem>
    </aside>
  );
};

const ProfileSummary: React.FC = (): JSX.Element => {
  return (
    <section className="card d-flex column justify-content-center flex-center padding-vertical-sm">
      <div className="avatar-container border-r-circle">
        <img
          src="https://res.cloudinary.com/dx5lp5drd/image/upload/v1574682959/businessman-310819_640_guvqva.png"
          alt="User avatar"
        />
      </div>
      <h3 className="font-sm color-white font-weight-500 capitalize">
        charles omoregie
      </h3>
      <h4 className="color-gray-light font-weight-400 font-xs text-center">
        UI/UX Designer & Developer
      </h4>
      <h5 className="font-xs font-weight-400 color-gray-dark">+234 8170028831</h5>
    </section>
  );
};

const ListItem: React.FC<ListItemProps> = ({
  title,
  link,
  subtitle,
  children,
  iconBackgroundColor,
}): JSX.Element => {
  return (
    <NavLink
      to={link}
      activeClassName="active"
      className="card color-white d-flex align-items-center">
      <div
        className="d-flex flex-center border-r-circle list-item-icon margin-right-sm"
        style={{ backgroundColor: iconBackgroundColor }}>
        {children}
      </div>
      <div className="">
        <h3 className="font-sm font-weight-400 capitalize margin-bottom-xs title">
          {title}
        </h3>
        <h4 className="font-xs color-gray-dark font-weight-400 title">{subtitle}</h4>
      </div>
    </NavLink>
  );
};
