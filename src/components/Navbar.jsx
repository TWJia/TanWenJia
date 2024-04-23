// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../images/Logo_Black.png";
// import HomeIcon from "@mui/icons-material/Home";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import MenuIcon from "@mui/icons-material/Menu";
// export default function Navbar() {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   const [openMenu, setOpenMenu] = useState(false);
//   return (
//     <nav className="navbar">
//       <Link to="/" className="nav-links">
//         {<img className="nav-logo" src={logo} />}
//       </Link>
//       <div
//         className="menu"
//         onClick={() => {
//           setOpenMenu(!openMenu);
//         }}
//       >
//         <MenuIcon></MenuIcon>
//       </div>
//       <ul className={openMenu ? "open" : ""}>
//         <div className="navbar-container">
//           <li>
//             <Link to="/" className="nav-links">
//               <HomeIcon
//                 className="icon"
//                 style={{ fontSize: 30, marginRight: "0px" }}
//               />
//             </Link>
//           </li>
//           <li>
//             <NavLink
//               to="/www.linkedin.com/in/wen-jia-tan-27904521b"
//               className="nav-links"
//             >
//               <LinkedInIcon
//                 className="icon"
//                 style={{ fontSize: 30, marginRight: "0px" }}
//               />
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/Projects" className="nav-links">
//               Projects
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/Experience" className="nav-links">
//               Experience
//             </NavLink>
//           </li>
//         </div>
//       </ul>
//     </nav>
//   );
// }

import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/Logo_Black.png";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="nav-links">
        {<img className="nav-logo" src={logo} />}
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <MenuIcon></MenuIcon>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/" className="nav-links">
            <HomeIcon
              className="icon"
              style={{ fontSize: 30, marginRight: "0px" }}
            />
          </Link>
        </li>
        <li>
          <NavLink className="nav-links" to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-links" to="/experiences">
            <EmojiEventsIcon />
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-links" to="/education">
            <SchoolIcon />
            Education
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
