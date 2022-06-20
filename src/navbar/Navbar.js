import { useState } from "react";
import "./Navbar.scss";
import Links from "./links/Link";
import * as svg from "../assets/Svg1";
import SwitchTheme from "./switchTeme/switchTheme";
import Profile from "./profile/profile";

const MENU_ITEMS = [
  {
    title: "ANALYTICS",
    subMenu: [
      {
        title: "Dashboard",
        link: "/#",
        icon: svg.Svg6(),
      },
      {
        title: "Performance",
        link: "/#",
        icon: svg.Svg7(),
      },
    ],
  },
  {
    title: "CONTENT",
    subMenu: [
      {
        title: "Guides",
        link: "/#",
        icon: svg.Svg1(),
      },
      {
        title: "Hotspots",
        link: "/#",
        icon: svg.Svg2(),
      },
      {
        title: "CheckLists",
        link: "/#",
        icon: svg.Svg3(),
      },
      {
        title: "NPS",
        link: "/#",
        icon: svg.Svg4(),
      },
    ],
  },
  {
    title: "CUSTOMIZATION",
    subMenu: [
      {
        title: "Segments",
        link: "/#",
        icon: svg.Svg5(),
      },
    ],
  },
];

const Navbar = () => {

  const [openNav, setOpenNav] = useState(false);


  return (
    <div className={`navbar ${openNav ? "open" : "close" }`}>
      <div className="open-menu-btn" onClick={() => setOpenNav(!openNav)}>
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.92332 13.0377L1.00023 6.96178L7.07617 1.0387"
            stroke="#7079B4"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="logo">
        <svg
          width="18"
          height="29"
          viewBox="0 0 18 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.71525 0.197278C8.88654 0.0786085 9.11346 0.0786088 9.28475 0.197279L15.4793 4.489C15.8822 4.76811 15.6847 5.4 15.1946 5.4H2.80543C2.31533 5.4 2.11783 4.76811 2.52068 4.489L8.71525 0.197278Z"
            fill="white"
          />
          <circle cx="9.00003" cy="10.2" r="3" fill="white" />
          <path
            d="M2.40002 18.0001V22.2001L15.6 17.4001V13.2001L2.40002 18.0001Z"
            fill="white"
          />
          <path d="M2.40002 24V28.2L15.6 23.4V19.2L2.40002 24Z" fill="white" />
        </svg>
      </div>
      <div className="linkWrapper">
        {MENU_ITEMS?.map((el, i) => (
          <Links
            title={el.title}
            openNav={openNav}
            key={i}
            links={el.subMenu}
          />
        ))}
      </div>
      <div style={{
        width:" 100%"
      }}>
        <SwitchTheme />
        <Profile />
      </div>
    </div>
  );
};
export default Navbar;
