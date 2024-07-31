import { LOGO_MAIN } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../../utils/cusHooks/useStatus";

const Header = () => {
   let [toggleLogin, setToggleLogin] = useState("Login");
   const onlineStatus = useStatus();

   return (
      <div className="header">
         <div className="logo">
            <Link to="/">
               <img src={LOGO_MAIN} id="resImage" alt="Logo" />
            </Link>
         </div>
         <div className="nav-items">
            <ul>
               <li>OnlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/grocery">Grocery</Link>
               </li>
               <li>
                  <Link to="/about">About Us</Link>
                  {/* <Link to="/about">AboutClass Us</Link> */}
               </li>
               <li>
                  <Link to="/cart">Cart</Link>
               </li>
               <li>
                  <button
                     className="loginLogoutBtn"
                     type="button"
                     onClick={() => {
                        toggleLogin === "Logout"
                           ? setToggleLogin("Login")
                           : setToggleLogin("Logout");
                     }}
                  >
                     {toggleLogin}
                  </button>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Header;
