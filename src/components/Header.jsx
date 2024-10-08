import { LOGO_MAIN } from "../../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useStatus from "../../utils/cusHooks/useStatus";
import UserContext from "../../utils/contextData/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
   let [toggleLogin, setToggleLogin] = useState("Login");
   const onlineStatus = useStatus();
   const userLoginData = useContext(UserContext);
   // READING DATA FROM STORE USING SELECTORS HOOK (Subscribing to the store)
   const cartItems = useSelector((store) => {
      return store.cart.items;
   });
   console.log(cartItems);

   return (
      <div className="header">
         <div className="logo">
            <Link to="/">
               <img src={LOGO_MAIN} id="resImage" alt="Logo" />
            </Link>
         </div>
         <div className="nav-items">
            <ul>
               <li>Online: {onlineStatus ? "🟢" : "🔴"}</li>
               {toggleLogin === "Logout" ? (
                  <li>Hi, {userLoginData.loginName}</li>
               ) : null}
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/grocery">Grocery</Link>
               </li>
               {/* <li>
                  <Link to="/about">About Us</Link>
               </li> */}
               <li>
                  <Link to="/cart">
                     Cart
                     {cartItems.length > 0 ? `  (${cartItems.length})` : null}
                  </Link>
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
