import { useState } from "react";
import "./Navbar.scss";
import Links from "./links";
import * as svg from "../assets/Svg1"

const MENU_ITEMS = [
  {
    title: "ANALYTICS",
    subMenu: [
      {
        title: "Dashboard",
        link: "/#",
        icon:svg.Svg6()
      },
      {
        title: "Performance",
        link: "/#",
        icon:svg.Svg7()
      },
    ],
  },
  {
    title: "CONTENT",
    subMenu: [
      {
        title: "Guides",
        link: "/#",
        icon:svg.Svg1()
      },
      {
        title: "Hotspots",
        link: "/#",
        icon:svg.Svg2()
      
      },
      {
        title: "CheckLists",
        link: "/#",
        icon:svg.Svg3()
      },
      {
        title: "NPS",
        link: "/#",
        icon:svg.Svg4()
      },
    ],
  },
  {
    title: "CUSTOMIZATION",
    subMenu: [
      {
        title: "Segments",
        link: "/#",
        icon:svg.Svg5()
      }
    ]
  }
];

const Navbar = () => {

  const [openNav, setOpenNav] = useState(false);
  const className = `navbar ${openNav ? "open" : ""}`;

  console.log(MENU_ITEMS)


  return (
    <div className={className}>
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
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="54" height="54" rx="10" fill="#305DF6" />
          <path
            d="M26.7153 12.1972C26.8865 12.0786 27.1135 12.0786 27.2847 12.1972L33.4793 16.489C33.8822 16.7681 33.6847 17.4 33.1946 17.4H20.8054C20.3153 17.4 20.1178 16.7681 20.5207 16.489L26.7153 12.1972Z"
            fill="white"
          />
          <circle cx="27" cy="22.2" r="3" fill="white" />
          <path d="M20.4 30V34.2L33.6 29.4V25.2L20.4 30Z" fill="white" />
          <path d="M20.4 36V40.2L33.6 35.4V31.2L20.4 36Z" fill="white" />
        </svg>
      </div>
      {
          MENU_ITEMS?.map((el,i) => (
              <Links title={el.title} openNav={openNav} key={i} links={el.subMenu} />
          ))
      }
    </div>
  );
};
export default Navbar;
